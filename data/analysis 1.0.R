# 2.01 started for cogsci 2014 submission
# 2.03 started after cogsci initial submission
# above numbers are from STOE 01
# 1.0 started for STOE 03

### utilities and packages

library( car )
library( ez )
options(contrasts=c("contr.sum","contr.poly"))
options(digits=3)

utils_path = "..\\..\\..\\Other Stuff\\R Utilities\\"
source( paste0( utils_path, "graphics 0.3.R" ) )
source( paste0( utils_path, "analysis.R" ) )

### load the data
if ( TRUE ) {
    source( 'readData 1.0.R' )
} else {
    load( 'STOE_03_data.RData' )
}

# select only data for binomial section
long.data   = droplevels( subset( long.data, topic=="Binomial" ) )
subj.data   = dcast( long.data, subjid+condition+temporal_first+temporal+mask~questype, fun.aggregate=mean, value.var='accuracy' )
subj.data$accuracy = ( subj.data$Recall + subj.data$Comprehension ) / 2
head( subj.data )
nrow( subj.data )

D = subj.data
table( D$condition )
table( D$mask, D$condition )
table( D$temporal_first, D$condition )
table( D$mask, D$temporal_first )

D = long.data
tapply( D$accuracy, list( D$mask, D$temporal, D$topic ), mean )



# old stuff

# short.data  = droplevels( subset( short.data, topic=="Binomial" ) )
# subj.data$accuracy  = subj.data$accuracy_binomial
# subj.data$prevexp   = subj.data$prevexp_binomial

# # add aggregated training data to subj.data
# D = long.data
# for ( v in c('topic','number','stimID','questype','key','response') ) { D[,v] = NULL }
# D = melt( D, measure.vars=c( 'train_accuracy', 'train_errors', 'train_moves', 'train_reps', 'train_time' ) )
# train.data = dcast( D, subjid~variable, fun.aggregate=mean, value.var='value' )
# subj.data = merge( subj.data, train.data, all=TRUE )

# # create numeric version of perceived helpfulness
# subj.data$helpful_num = as.numeric( subj.data$helpfulness )

### exploration

D = subj.data
D$performance = factor( ifelse( D$accuracy>median(D$accuracy), "High", "Low" ), levels=c( "High", "Low" ) )
tapply( D$accuracy, D$performance, mean )
tapply( D$train_accuracy, D$performance, mean )
tapply( D$train_errors, D$performance, mean )
tapply( D$train_moves, D$performance, mean )
tapply( D$train_moves, list( D$performance, D$training ), mean )
tapply( D$train_reps, D$performance, mean )
tapply( D$train_reps, D$training, mean )
tapply( D$train_reps, list( D$performance, D$training ), mean )
tapply( D$train_time, D$performance, mean )
tapply( D$train_time, list( D$performance, D$training ), mean )
tapply( D$helpful_num, D$performance, mean )

D = merge( subj.data[,c('subjid','condition','training','spatial','temporal','time','sex','age','education','prevexp','helpfulness','helpful_num','accuracy_binomial')],
    droplevels( subset( prac.data, topic=='Binomial' ) ), all=TRUE )
D = D[ with( D, order( subjid, topic, number ) ), ]
D$block = 1+floor( (as.numeric(factor(D$number))-1)/5 )

par( mfrow=c(2,2) )
lineplot.CI(
    response=D$rt, ylab='Response Time (ms)',
    x.factor=D$block, xlab='Block Number' )
lineplot.CI(
    response=D$rt, ylab='Response Time (ms)',
    x.factor=D$block, xlab='Block Number',
    group=D$spatial, x.leg='top' )
lineplot.CI(
    response=D$rt, ylab='Response Time (ms)',
    x.factor=D$block, xlab='Block Number',
    group=D$temporal, x.leg='top' )
lineplot.CI(
    response=D$rt, ylab='Response Time (ms)',
    x.factor=D$block, xlab='Block Number',
    group=D$training, x.leg='top' )

par( mfrow=c(2,2) )
lineplot.CI(
    response=D$accuracy, ylab='Accuracy',
    x.factor=D$block, xlab='Block Number' )
lineplot.CI(
    response=D$accuracy, ylab='Accuracy',
    x.factor=D$block, xlab='Block Number',
    group=D$spatial, x.leg='top' )
lineplot.CI(
    response=D$accuracy, ylab='Accuracy',
    x.factor=D$block, xlab='Block Number',
    group=D$temporal, x.leg='top' )
lineplot.CI(
    response=D$accuracy, ylab='Accuracy',
    x.factor=D$block, xlab='Block Number',
    group=D$training, x.leg='top' )
    
tapply( D$accuracy, list( D$number, D$training ), mean )
tapply( D$rt, list( D$number, D$training ), mean )
    

### sample profile

D = subj.data
length( D$subjid )
table( D$training )
table( D$condition, D$spatial )
table( D$condition, D$temporal )
addmargins( table( D$sex, D$age ) )
T = table( D$prevexp_binomial, D$training ); T; chisq.test( T )
T = table( D$prevexp_power, D$training ); T; chisq.test( T )
summary( D$time )


### tutorial behavior

D = subj.data

summary( D[,'train_accuracy'] )
ezANOVA( data=D, dv=train_accuracy, wid=subjid, between=.(spatial,temporal), type=3 )
tapply( D[,'train_accuracy'], list( D$spatial, D$temporal ), mean )
cor.test( D[,'train_accuracy'], D$accuracy, method='pearson' )

summary( D[,'train_errors'] )
ezANOVA( data=D, dv=train_errors, wid=subjid, between=.(spatial,temporal), type=3 )
tapply( D[,'train_errors'], list( D$spatial, D$temporal ), mean )
cor.test( D[,'train_errors'], D$accuracy, method='pearson' )

summary( D[,'train_moves'] )
ezANOVA( data=D, dv=train_moves, wid=subjid, between=.(spatial,temporal), type=3 )
tapply( D[,'train_moves'], D$spatial, mean )
tapply( D[,'train_moves'], D$temporal, mean )
tapply( D[,'train_moves'], list( D$spatial, D$temporal ), mean )
cor.test( D[,'train_moves'], D$accuracy, method='pearson' )

summary( D[,'train_time'] )
ezANOVA( data=D, dv=train_time, wid=subjid, between=.(spatial,temporal), type=3 )
tapply( D[,'train_time'], list( D$spatial, D$temporal ), mean )
cor.test( D[,'train_time'], D$accuracy, method='pearson' )

summary( D[,'helpful_num'] )
ezANOVA( data=D, dv=helpful_num, wid=subjid, between=.(spatial,temporal), type=3 )
tapply( D[,'helpful_num'], list( D$spatial, D$temporal ), mean )
cor.test( D[,'helpful_num'], D$accuracy, method='pearson' )


### test accuracy

# overall
summary( subj.data$accuracy )
t.test( subj.data$accuracy, mu=0.25 )

# anova
D = short.data
ezANOVA( data=D, dv=accuracy, wid=subjid, within=questype, between=.(spatial,temporal), type=3 )

# question type
tapply( D$accuracy, D$questype, mean )
E = subset(D,questype=='Recall'); t.test( E$accuracy, mu=0.25 )
E = subset(D,questype=='Comprehension'); t.test( E$accuracy, mu=0.25 )

# spatial and temporal
tapply( D$accuracy, D$spatial, mean )
tapply( D$accuracy, D$temporal, mean )
tapply( D$accuracy, list( D$spatial, D$temporal ), mean )

# post hoc tests
D = subj.data
E = subset(D,temporal=='Simultaneous'); t.test( E$accuracy~E$spatial )
E = subset(D,temporal=='Successive'); t.test( E$accuracy~E$spatial )
E = subset(D,spatial=='Juxtaposed'); t.test( E$accuracy~E$temporal )
E = subset(D,spatial=='Grid'); t.test( E$accuracy~E$temporal )


# OK. There are 3 ways you could do it. First is do all pairwise comparisons. In that case the conclusions are (a) simultaneous superimposed>simultaneous separated, and (b) successive separated>simultaneous separated. (b) is marginal, not credible, and not replicated. Second is to do comparisons within each spatial condition. Conclusions are then (b) above and (c) simultaneous superimposed>successive superimposed, interesting, but only marginal. Third is do comparisons within each temporal condition, which gives (d) simultaneous superimposed>simultaneous separated only. Third option seems strongest.

# so ... it sounds like we should frame it as a question of (1) whether the spatial dimension would make a difference, and (2) whether the temporal dimension would make a difference, and (3) whether the temporal dimension would influence effects of the spatial dimension.



# to do:
# effects of experience

### graphics

w = 5; h = w/1.5; r = 216; p = r*.0625; # g.r. = 1.618
png( filename="Figure 2 accuracy by spatial and temporal.png", units='in', width=w, height=h, res=r, pointsize=p )
ylim = c(0,1); y.at=round(seq(0,1,.2),2); y.labels=paste0(y.at*100,"%"); xaxis.pos=0.0
interactionBargraphA( D, 'accuracy', 'Accuracy (% correct)', ylim, y.at, y.labels, 'temporal', 'Presentation Mode', xaxis.pos, 'spatial' )
dev.off()
