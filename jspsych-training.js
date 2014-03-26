//////////////////////////////////
// custom plugin for jspsych
//////////////////////////////////

( function ( $ ) {

    jsPsych.training = (function() {
    
        var plugin = {};
        
        plugin.create = function( params ) {
        
            var trials = new Array( params.questions.length );
            
            for ( var i=0; i<trials.length; i++ ) {
            
                // block-level parameters
                trials[i] = {};
                trials[i]["type"]           = "training";
                trials[i]["mode"]           = params.mode;
                trials[i]["presenterSpecs"] = params.presenterSpecs;
                
                // trial-level parameters
                trials[i]["question"]       = params.questions[i];
                if ( params.data[i]!=undefined ) {
                    trials[i]["data"]       = params.data[i];
                } else {
                    trials[i]["data"]       = {};
                }
                
            }
            
                
            return trials;
            
        }
        
        plugin.trial = function( $this, block, trial, part ) {
        
            // data to be collected
            var trial_data = {
                "text_key"          : undefined, // param vals for correct response, if any
                "rt"                : undefined, // total time on trial
                "accuracy"          : undefined, // same as resp_first_acc, included for convenience
                "falsetries"        : undefined, // same as num_resp or, if last response is correct, num_resp-1
                "num_resp"          : 0,         // number of times a response was submitted
                "resp_trajectory"   : [],        // param vals for all responses as text string
                "resp_first"        : undefined, // param vals for first response as text string
                "resp_first_time"   : undefined, // time from start to submission of first response
                "resp_first_acc"    : undefined, // whether first response matches key
                "resp_last"         : undefined, // param vals for last response as text string
                "resp_last_time"    : undefined, // time from start to submission of last response    
                "resp_last_acc"     : undefined, // whether last response matches key
                "trajectory"        : [],        // all param vals selected during interaction with presenter
                "traj_first_length" : undefined, // total number of distinct param settings selected up to first response
                "traj_last_length"  : undefined  // total number of distinct param settings selected up to last response
                };
            if ( trial.question.key!=undefined ) {
                trial_data.text_key = trial.question.key.toString();
            }
            var startTime = (new Date()).getTime();
            
            // create page layout
            var totWd       = 1250;
            var textWd      = 325;
            var totHt       = 600;
            var presenterWd = totWd - textWd;
            var presenterHt = totHt;
            $this.html( '<div id="wrapper" style="width:"'+totWd+'px">\
                    <div id="presenter" style="width:'+presenterWd+'px;height:'+presenterHt+'px;background-color:black;float:right"></div>\
                    <div id="question" style="width:'+textWd+'px;height:250px;background-color:#B0C4DE">\
                        <div id="question_text" class="centered-with-margin"></div></div>\
                    <div id="feedback" style="width:'+textWd+'px;height:250px;background-color:#B0C4DE">\
                        <div id="feedback_text" class="centered-with-margin"></div></div>\
                    <div id="submit" class="centered-cell" style="width:'+textWd+'px;height:100px;background-color:#B0C4DE"></div>\
                </div>' );

            // create functionPresenter
            var specs = trial.presenterSpecs;
            var onClick = function() { trial_data.trajectory.push( this.getVals() ); console.log( "presenter clicked with vals: " + this.getVals().toString() ); }
            var presenter = new functionPresenter( specs.functionType, specs.spatialOrg, specs.temporalOrg, specs.mask, onClick );
            presenter.drawSelf( $('#presenter'), presenterHt, presenterWd )

            // add question and submit button
            $( "#question_text" ).html( trial.question.text );
            if ( trial.question.key===undefined ) {
                $( "#submit" ).html( '<button type="button" id="submit_button">Continue</button>' );
            } else {
                $( "#submit" ).html( '<button type="button" id="submit_button">Submit</button>' );
            }
            
            // add handler for submit button
            var ready       = ( trial.question.key===undefined ) ? true : false ;   // whether we're ready to go to the next trial when submit is clicked
            var maxtries    = ( trial.question.force_correct ) ? 20 : 3 ;           // maximum number of incorrect submissions allowed
            var handleSubmit = function() {
                $( '#submit_button' ).prop( 'disabled', true );
                if ( ready ) {
                    // record data and proceed to next trial
                    $('#submit_button').unbind( 'click', handleSubmit );
                    $this.html('');
                    trial_data.rt               = (new Date()).getTime() - startTime;
                    trial_data.accuracy         = trial_data.resp_first_acc;
                    trial_data.falsetries       = (trial_data.resp_last_acc==1) ? (trial_data.num_resp-1) : trial_data.num_resp;
                    trial_data.resp_trajectory  = trial_data.resp_trajectory.toString();
                    trial_data.trajectory       = trial_data.trajectory.toString();
                    block.data[block.trial_idx] = $.extend({},trial.data,trial_data);
                    setTimeout( function(){block.next();}, 250 );
                } else {
                    // record data
                    trial_data.num_resp         = trial_data.num_resp + 1;
                    trial_data.resp_trajectory  = trial_data.resp_trajectory.concat( [ presenter.getVals() ] );
                    trial_data.resp_last        = presenter.getVals().toString();
                    trial_data.resp_last_time   = (new Date()).getTime() - startTime;
                    if ( trial.question.key!=undefined ) {
                        trial_data.resp_last_acc    = Number( compareArrays( presenter.getVals(), trial.question.key ) );
                    }
                    trial_data.traj_last_length = trial_data.trajectory.length;
                    if ( trial_data.num_resp == 1 ) {
                        trial_data.resp_first       = trial_data.resp_last;
                        trial_data.resp_first_time  = trial_data.resp_last_time;
                        trial_data.resp_first_acc   = trial_data.resp_last_acc;
                        trial_data.traj_first_length = trial_data.traj_last_length;
                    }                    
                    console.log( "training.handleSubmit response received: " + trial_data.resp_last.toString() + " with key " + trial_data.text_key.toString() );
                    // select appropriate feedback and decide whether to allow them to go on
                    $('#feedback_text').html( "" );
                    $('#feedback').css( 'background-color', '#B0C4DE' );
                    var adjust, disable, fdbk, color, delay;
                    if ( trial_data.resp_last_acc==1 ) {
                        // answer was correct - let them proceed
                        fdbk    = trial.question.feedback_correct;
                        color   = 'LightGreen';
                        adjust  = false;
                        disable = true;
                        ready   = true;
                        delay   = 0;
                    } else if ( trial_data.num_resp >= maxtries || trial.mode=='free' ) {
                        // answer was incorrect, but reached max errors - show correct response and let them proceed after delay
                        // we also do this if we are in 'free' mode, to be used only for testing
                        fdbk    = trial.question.feedback_incorrect;
                        color   = "red";
                        adjust  = true;
                        disable = true;
                        ready   = true;
                        delay   = { "forced": 10000, "free": 0, "auto": 0 }[ trial.mode ];
                    } else {
                        // answer was incorrect, not yet reached max errors - make them try again, unless you are in "free" mode
                        fdbk    = trial.question.feedback_tryagain;
                        color   = "red";
                        adjust  = false;
                        disable = false;
                        ready   = false;
                        delay   = 0;
                    }
                    // show feedback and reactivate submit button
                    setTimeout( function() {
                        $('#feedback_text').html( fdbk );
                        $('#feedback').css( 'background-color', color );
                        if ( adjust )   { presenter.setVals( trial.question.key[0], trial.question.key[1] ); }
                        if ( disable )  { presenter.disableSliders(); }
                        if ( ready )    { $('#submit_button').html( "Continue" ); }
                        setTimeout( function() {
                            $('#submit_button').prop( 'disabled', false ); }, delay );
                            if ( trial.mode=="auto" ) { setTimeout( function() { $('#submit_button').click(); }, 10 ); }
                        }, 250 );
                }
            }
            
            // set submit button to use handler and disable it for a moment to discourage "clicking through" without reading
            $( "#submit_button" ).click( handleSubmit );
            if ( trial.mode=="free" ) {
                $( '#submit_button' ).prop( 'disabled', true );
                setTimeout( function() { $('#submit_button').prop( 'disabled', false ).focus(); }, 100 );
            } else if ( trial.mode=="forced" ) {
                $( '#submit_button' ).prop( 'disabled', true );
                setTimeout( function() { $('#submit_button').prop( 'disabled', false ); }, 1000 );
            } else if ( trial.mode=="auto" ) {
                setTimeout( function () { 
                    if ( !ready ) { presenter.setVals( trial.question.key[0], trial.question.key[1] ); }
                    $('#submit_button').click(); }, 10 );
            }
            window.scrollTo(0,0);
            
		}
        
		return plugin;
	})();
}) (jQuery);