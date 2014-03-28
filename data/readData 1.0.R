library( car )
library( reshape2 )

# read in original raw data
orig.data           = read.csv( "STOE_03_data.csv", header=TRUE )
# remove dummy rows
orig.data           = droplevels( subset( orig.data, !is.na( time ) ) )
# add temporal factor where it's missing (first few subjects)
for ( s in unique( orig.data$subjid ) ) {
    if ( subset(orig.data,subjid==s & section=='Test')[1,'temporal']=="" ) {
        temporal_first = subset( orig.data, subjid==s )[1,'temporal_first']
        orig.data[ with( orig.data, subjid==s & section=='Test' & topic=='Binomial' ), 'temporal' ] = ifelse( temporal_first=='Superimposed first', 'Superimposed', 'Separated' )
        orig.data[ with( orig.data, subjid==s & section=='Test' & topic=='Power Law' ), 'temporal' ] = ifelse( temporal_first=='Superimposed first', 'Separated', 'Superimposed' )
    }
}
# define factors
orig.data$topic     = factor( orig.data$topic, levels=c('Binomial','Power Law') )
orig.data$temporal_first = recode( orig.data$temporal_first, "'Superimposed first'='Simultaneous first'; 'Separated first'='Successive first'; else=NA", levels=c( 'Simultaneous first', 'Successive first' ) )
orig.data$temporal  = recode( orig.data$temporal, "'Superimposed'='Simultaneous'; 'Separated'='Successive'; else=NA", levels=c( 'Simultaneous', 'Successive' ) )
orig.data$mask      = factor( ifelse( orig.data$mask, "Mask", "No mask" ), levels=c( "Mask", "No mask" ) )
head( orig.data )

# create background data frame
# 0   intro
# 1   comments (OA)
# 2   helpfulness
# 3   experience w binomial
# 4   experience w power law ( "No", "Not sure", "Yes" )
# 5   sex ( male, female )
# 6   age 
# 7   education 
# 8   SAT math ( OA )
# 9   ACT math ( OA )
# currently only set up to handle the multiple choice ones:
D = droplevels( subset( orig.data, 
    (section=="Background") & (number%in%c(2,3,4,5,6,7)),
    select=c( 'subjid', 'number', 'response' )  ) )
D$question = recode( D$number,
    " 2='helpfulness'; 3='prevexp_binomial'; 4='prevexp_power'; 5='sex'; 6='age'; 7='education'; else=NA " )
D = dcast( D, subjid~question, fun.aggregate=mean, value.var='response' )
D$helpfulness = factor( recode( D$helpfulness,
    ' 0="Not at all helpful"; 1="Not very helpful"; 2="So-so"; 3="Somewhat helpful"; 4="Very helpful"; else=NA ' ) )
D$prevexp_binomial = factor( recode( D$prevexp_binomial,
    ' c(0,1)="No/unsure"; 2="Yes"; else=NA ' ) )
D$prevexp_power = factor( recode( D$prevexp_power,
    ' c(0,1)="No/unsure"; 2="Yes"; else=NA ' ) )
D$sex = factor( recode( D$sex, " 0='Male'; 1='Female'; else=NA " ),
    levels=c('Male','Female') )
D$age = factor( recode( D$age, 
    ' 0="Under 18"; 1="18 to 21"; 2="22 to 25"; 3="26 to 30"; 4="31 to 35"; 5="36 to 40"; 6="41 or over"; else=NA ' ),
    levels=c( "Under 18", "18 to 21", "22 to 25", "26 to 30", "31 to 35", "36 to 40", "41 or over" ) )
D$education = factor( recode( D$education,
    ' 0="Below high school"; 1="High school / GED"; 2="Some college"; 3="2-year college degree"; 4="4-year college degree"; 5="Masters degree"; 6="Doctoral degree"; 7="Professional degree (JD, MD, etc.)"; else=NA ' ),
    levels=c( "Below high school", "High school / GED", "Some college", "2-year college degree", "4-year college degree", "Masters degree", "Doctoral degree", "Professional degree (JD, MD, etc.)" ) )
back.data = D
head( back.data )

# create practice data frame
# TBD: eliminate trials that are not meaningful?
prac.data = droplevels( subset( orig.data,
    (section=="Practice") & (text_key!=""),
    select=c( 'subjid', 'topic', 'number', 'stimID', 'text_key', 'accuracy', 'rt', 'falsetries', 'num_resp', 'trajectory', 'resp_trajectory', 'resp_first', 'resp_first_time', 'resp_first_acc', 'resp_last', 'resp_last_time', 'resp_last_acc' ) ) )
trajectoryToVector = function( traj ) {
    # split the trajectory into its separate parameters
    u = strsplit( as.character(traj), "," )[[1]]
    # separate into two vectors for x and y parameters respectively
    ux = u[c(TRUE,FALSE)]
    uy = u[c(FALSE,TRUE)]
    # recombine to form pairs
    v = paste( ux, uy )
    return(v)
}
removeDuplicates = function( v ) {
    if ( length(v)<=1 ) {
        return(v)
    } else if ( v[1]==v[2] ) {
        return( removeDuplicates(v[-1]) )
    } else {
        return( c( v[1], removeDuplicates(v[-1]) ) )
    }
}
editTrajectory = function( traj, topic ) {
    # add the starting position
    if ( topic=='Binomial' ) {
        first = "20 0.25"
    } else if ( topic=='Power Law' ) {
        first = "1 0.6"
    }
    u = c( first, traj )
    # remove duplicates
    v = removeDuplicates( u )
    # return
    return( v )
}
trajectoryToLength = function( trajvec ) {
    return( length( trajvec ) )
}
trajectoryToString = function( trajvec ) {
    return( paste( trajvec, collapse=' . ' ) )
}
trajectoryToNumRepeats = function( trajvec ) {
    return( sum( table( trajvec ) - 1 ) )
}
train_moves = NULL
train_traj  = NULL
train_reps  = NULL
for ( i in 1:length(prac.data$subjid) ) {
    trajvec = editTrajectory( trajectoryToVector( prac.data[i,'trajectory'] ), prac.data[i,'topic'] )
    train_moves = c( train_moves, trajectoryToLength( trajvec ) )
    train_traj  = c( train_traj,  trajectoryToString( trajvec ) )
    train_reps  = c( train_reps,  trajectoryToNumRepeats( trajvec ) )
}
prac.data$train_moves = train_moves
prac.data$train_traj  = train_traj
prac.data$train_reps  = train_reps
# aggregate variables of interest
prac.short.data = melt( prac.data, measure.vars=c( 'accuracy', 'falsetries', 'rt', 'train_moves', 'train_reps' ) )
# accuracy: of first response
# falsetries: number of incorrect responses
# rt: total time on training trial
prac.short.data$variable = recode( prac.short.data$variable,
    " 'accuracy'='train_accuracy'; 'falsetries'='train_errors'; 'rt'='train_time'; 'train_moves'='train_moves'; 'train_reps'='train_reps'; else=NA " )
prac.short.data = dcast( prac.short.data, subjid+topic~variable, fun.aggregate=mean, value.var='value' )
head( prac.short.data )

# create test data frame
test.data = droplevels( subset( orig.data, (section=="Test") & (questype!='Text') ) )
head( test.data )

# long data is test data frame with background & practice data added
long.data = merge( test.data, back.data )
long.data = merge( long.data, prac.short.data )
long.data = subset( long.data, select=c( 'subjid', 'condition', 'temporal_first', 'mask', 'temporal', 'time', 'sex', 'age', 'education', 'prevexp_binomial', 'prevexp_power', 'helpfulness', 'topic', 'train_accuracy', 'train_errors', 'train_moves', 'train_reps', 'train_time', 'number', 'stimID', 'questype', 'key', 'response', 'accuracy', 'rt' ) )
long.data$questype = factor( long.data$questype, levels=c('Recall','Comprehension') )
head( long.data )

# create short.data: one row per subject * questype * topic
D = long.data;
for (v in c('number','stimID','key','response')) { D[,v]=NULL }; 
D = melt(D,measure.vars=c('accuracy','rt'))
short.data  = dcast( D, ...~variable, fun.aggregate=mean, value.var="value" )
head( short.data )

# create subj.data: one row per subject
D = short.data;
for (v in c('train_accuracy', 'train_errors', 'train_moves', 'train_reps', 'train_time', 'number', 'stimID', 'questype', 'key', 'response', 'rt')) { D[,v]=NULL }; 
D$topic = paste0( "accuracy_", ifelse( D$topic=="Binomial", "binomial", "power" ) )
D$temporal = paste0( "accuracy_", tolower( D$temporal ) )
E = dcast( D[,names(D)!='temporal'], ...~topic, fun.aggregate=mean, value.var='accuracy' )
F = dcast( D, subjid~temporal, fun.aggregate=mean, value.var='accuracy' )
subj.data = merge( E, F )
head( subj.data )

# save the data
save( orig.data, long.data, short.data, subj.data, prac.data, prac.short.data, file='STOE_03_data.RData' )

# quick look at the data

D = subj.data; head( D ); nrow( D )
table( D$condition )
table( D$mask, D$condition )
table( D$temporal_first, D$condition )
table( D$mask, D$temporal_first )

myapply = function( ivs, dv ) {
    return( addmargins( tapply( dv, ivs, mean ), FUN=mean, quiet=TRUE ) ) }
with( short.data, lapply(
    list( list( mask, temporal_first ),
          list( mask, temporal ),
          list( mask, topic ),
          list( mask, temporal, topic ) ),
    myapply, accuracy ) )