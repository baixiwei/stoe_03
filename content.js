//////////////////////////////////////////
// Tutorial
//////////////////////////////////////////

function getTutorialBlock( topic, mode ) {
    // binomial
    var specs_text = { "Binomial": [
        "<h2>Flipping Coins</h2><p>If you flip a coin a few times, it's fairly likely that it will come up heads half the time. But, it might come up heads a little more or less than half the time.</p><p><img src='stimuli/coinflip.jpg' alt='coinflip.jpg' class='graph_in_text'></p><p>How does the likelihood of different proportions of heads depend on how many times you flip the coin? How does the picture change for a weighted (unfair) coin?</p><p>In this section, you'll learn the answers to these questions.</p>",
        "<h2>Flipping Coins</h2><p>Suppose the coin is fair and you flip it twice. The possible outcomes are: Tails + Tails, Heads + Tails, Tails + Heads, Heads + Heads.</p><p>Notice that there are 4 possible outcomes. In the 1st one, the proportion of Heads is 0%. In the 2nd and 3rd, the proportion of heads is 50%. And in the last one, the proportion of heads is 100%. So, we can say there is a 25% chance of getting 0% heads, a 50% chance of 50% heads, and a 25% chance of 100% heads. These probabilities are shown as a graph below:</p><p><img src='stimuli/binomial_example_1.png' alt='binomial_example_1.png' class='graph_in_text'></p>",
        "<h2>Flipping Coins</h2><p>What if we flip the coin twenty times instead of two? Here's the graph showing the probabilities of different proportions of heads. A trend line has been added to show the 'shape' of the data.</p><p><img src='stimuli/binomial_example_2.png' alt='binomial_example_2.png' class='graph_in_text'></p><p>Notice that 50% heads is still the most likely outcome, and extreme outcomes like 0% and 100% are very unlikely now.</p>",
        "<h2>Flipping Coins</h2><p>Now suppose we flip the coin forty times. The graph is below. This graph <b>only</b> shows the trend line, because showing the bars would look too complicated.</p><p><img src='stimuli/binomial_example_3.png' alt='binomial_example_3.png' class='graph_in_text'></p><p>50% heads is still most likely, and even slightly extreme outcomes like 30% heads or 70% heads are quite unlikely.</p><p>Now consider what happens if the coin isn't fair? Let's suppose the probability of heads on each flip is 75% instead of 50%. Then the graph looks like this, again assuming 40 flips:</p><p><img src='stimuli/binomial_example_4.png' alt='binomial_example_4.png' class='graph_in_text'></p><p>The graph has shifted over to the right. In fact, it's centered on the most likely outcome, which is now 75% heads. But the shape of the graph is very similar to the previous one.</p>",
        "<h2>Binomial Distributions</h2><p>Flipping coins are a good example for any situation in which an event with two possible outcomes is repeated many times, and you want to know the proportion of times that one of the outcomes occurs. For example, it could be the proportion of girls out of 1000 babies, the proportion of wins out of 30 games for a basketball team, etc.</p><p>Here's some terminology:<ul><li>Instead of 'number of flips', we'll refer to 'number of repetitions'.</li><li>Instead of 'probability of heads', we'll refer to 'probability of success'.</li><li>(It doesn't matter which of the two outcomes we designate as 'success'.)</li><li>Finally, instead of the 'proportion of heads', we'll talk about 'proportion of successful outcomes'.</li></ul></p>",
        "<h2>Binomial Distributions</h2><p>The graph showing the likelihoods for different proportions of successes, for a given probability of success and number of repetitions, is called a 'binomial distribution'. In our discussion of flipping coins, you've already seen a few examples, such as the one for 20 repetitions with 50% probability of success:</p><p><img src='stimuli/binomial_example_5.png' alt='binomial_example_5.png' class='graph_in_text'></p><p>Or the one for 40 repetitions with 75% probability of success:</p><p><img src='stimuli/binomial_example_6.png' alt='binomial_example_6.png' class='graph_in_text'></p><p>In the next section, you'll use an <b>interactive graph</b> to learn more about how the binomial distribution depends on the number of repetitions and probability of success.</p>"
    // power law
        ], "Power Law": [
        "<p><img src='stimuli/smiley20face_thumbsup.jpg' alt='Smiley Face!'></p><p>Great! You've finished the first part of the study. In the next part, you'll learn about a different data pattern. Take a break if you want, or click below to get started!</p>",
        "<h2>Whacking Moles</h2><p>Suppose you are learning a new skill, such as playing Whack-A-Mole. You'll be slow at first, but each time you whack a mole, you'll be a little faster.</p><p><img src='stimuli/whackamole.jpg' alt='whackamole.jpg' class='graph_in_text'></p><p>How does your speed improve with successive repetitions?  How does the improvement vary between different people?</p><p>In this section, you'll learn the answers to these questions.</p>",
        "<h2>Whacking Moles</h2><p>Suppose that you take 3 seconds to do the first whack. You'll probably be much faster on the second whack, as shown in this graph:</p><p><img src='stimuli/power_example_1.png' alt='power_example_1.png' class='graph_in_text'></p><p>You'll continue to improve with successive whacks, but it will take you longer to improve by the same amount. Above, you cut your time in half from the 1st whack to the 2nd whack, but it might take you 2 more whacks to cut your time in half again, and even longer to cut your time in half a 3rd time, as shown here:</p><p><img src='stimuli/power_example_2.png' alt='power_example_2.png' class='graph_in_text'></p>",
        "<h2>Whacking Moles</h2><p>Now let's suppose a slower guy than you comes along. Where you took 3 seconds for the 1st whack, he takes 5 seconds.  But, if he learns just as well as you, he can cut his time in half on the 2nd whack, again on the 4th whack, and so on, just like you.</p><p><img src='stimuli/power_example_3.png' alt='power_example_3.png' class='graph_in_text'></p><p>Though the whole graph is 'higher' than the previous one, reflecting that the guy is slower than you. But its 'shape' is about the same, reflecting that he learns at the same speed as you.</p>",
        "<h2>Whacking Moles</h2><p>But what if the slow guy is a fast learner?  He might start off slower than you, 5 seconds instead of 3 seconds for the 1st whack.  But, he might also improve faster than you, reducing his time by more than half on the 2nd whack, the 4th whack, and so on.  In this case, with the same amount of practice, he'll eventually be faster than you even though he started off slower.</p><p><img src='stimuli/power_example_4.png' alt='power_example_4.png' class='graph_in_text'></p><p>Notice that his faster learning is reflected in a 'steeper' shape of the graph.</p>",
        "<h2>Power Law of Practice</h2><p>Whack a mole is a good example for any situation involving practicing an action, where you want to know how the amount of practice affects how long it takes to perform the action.  The action could be card dealers shuffling cards, factory workers attaching widgets, children learning to write letters - pretty much any skill which people perform faster with repetitive practice.</p><p>Here's some terminology:<ul><li>Instead of 'number of whacks', we'll refer to 'number of trials', meaning how many times the action has been performed.</li><li>We'll use 'response time' to refer to the time it takes to perform the task.</li><li>We'll use 'initial time' to refer to how long it takes to perform the task the first time.</li><li>Finally, we'll use 'learning rate' to refer to how quickly the response time decreases as the number of trials increases.</li></ul>",
        "<h2>Power Law of Practice</h2><p>Psychological research has found that regardless of what action is involved, the decreases in response time with increasing numbers of repetitions tends to follow a similar pattern, called a 'power law'.</p><p>The specific pattern depends on only two things: the initial time and the learning rate. Once you know these two things, you can predict how fast the response time will decrease with practice. The first whack-a-mole example above assumed initial time=3 seconds and learning rate=1.0:</p><p><img src='stimuli/power_example_5.png' alt='power_example_5.png' class='graph_in_text'></p><p>While the last one assumed initial time=5 seconds and learning rate=1.4:</p><p><img src='stimuli/power_example_6.png' alt='power_example_6.png' class='graph_in_text'></p><p>In the next section, you'll use an <b>interactive graph</b> to learn more about how the power law pattern depends on the initial time and learning rate.</p>"
        ] }[ topic ];
    var specs = new Array( specs_text.length );
    for ( var i=0; i<specs_text.length; i++ ) {
        specs[i] = { "plugin": "text", "text": specs_text[i] };
    }
    var data = [];
    for ( var i=0; i<specs.length; i++ ) {
        data.push( { "section": "Tutorial", "topic": topic, "number": i, "stimID": specs[i].quesID } );
    }
    return { "type": "survey", "mode": mode, "timing": 500, "specs": specs, "data": data };
}


//////////////////////////////////////////
// Practice
//////////////////////////////////////////

function getPracticeBlock( topic, spatial, temporal, mask, mode ) {
    var questions;
    // binomial distribution
    if ( topic=="Binomial" ) {
        questions = [
            // general introduction
            { "quesID": 0,
              "text": "<p>The display shows graphs of binomial distributions for different numbers of repetitions and probabilities of success. You can interact with the display by using the sliders. This tutorial will first explain how to use the interactive display, and then you'll have a chance to practice with it.</p><p>Click <b>CONTINUE</b> to start.</p>" },
            { "quesID": 1,
              "text": "<p>First, look at the vertical slider on the left of the display. This slider controls the number of repetitions, such as how many times you flip the coin. It can be set to 3 different values: 20, 40, and 100.</p><p>Try changing it to 40 repetitions by clicking in the middle of the vertical slider. Then change it to 100 repetitions by clicking at the top. Leave the horizontal slider where it is now (25%). Click <b>SUBMIT</b> when you are done.</p>",
              "key": [100,.25],
              "force_correct": true,
              "feedback_correct": "<p>Good, you did it! Click <b>CONTINUE</b> to go on to the next page.</p>",
              "feedback_tryagain": "<p>Whoops! That's not correct. Try again, and click <b>SUBMIT</b> when you're ready. Call the experiment administrator if you need help.</p>",
              "feedback_incorrect": "<p>Whoops! Your answer is still incorrect, but let's go on anyway.</p><p>The <b>CONTINUE</b> button will be enabled after 10 seconds. Click <b>CONTINUE</b> to see the next question.</p>" },
            { "quesID": 2,
              "text": "<p>Now, look at the horizontal slider at the top of the display. This slider controls the probability of success on one repetition, such as the probability that one coin flip would come up heads. It can be set to 3 different values: 25%, 50%, and 75%.</p><p>Try changing it to 50% by clicking in the middle of the horizontal slider. Then change it to 75% by clicking at the far right. Leave the vertical slider where it is now (20). Click <b>SUBMIT</b> when you are done.</p>",
              "key": [20,.75],
              "force_correct": true,
              "feedback_correct": "<p>Good, you did it! Click <b>CONTINUE</b> to go on to the next page.</p>",
              "feedback_tryagain": "<p>Whoops! That's not correct. Try again, and click <b>SUBMIT</b> when you're ready. Call the experiment administrator if you need help.</p>",
              "feedback_incorrect": "<p>Whoops! Your answer is still incorrect, but let's go on anyway.</p><p>The <b>CONTINUE</b> button will be enabled after 10 seconds. Click <b>CONTINUE</b> to see the next question.</p>" },
            { "quesID": 3,
              "text": "<p>When you change the sliders, you can see how the graph changes as a result. The x-axis shows the possible proportions of repetitions resulting in successes, such as the proportion of coin flips resulting in heads. The y-axis shows the probabilities of each proportion of successes.</p><p>For example, notice that in the graph when 'x' is 25%, then 'y' is about 20%. That means there is a 20% chance that 25% of the repetitions will be successes. On the other hand, when 'x' is 40%, then 'y' is less than 10%, meaning there is less than a 10% chance that 40% of the repetitions will be successes.</p><p>Click <b>CONTINUE</b> to go on.</p>" },
            { "quesID": 4,
              "text": "<p>Try setting the sliders so that the number of repetitions is 40, and the probability of success on one repetition is 50%. See what happens to the graph.  Click <b>SUBMIT</b> when you are done.</p>",
              "key": [40,.50],
              "force_correct": true,
              "feedback_correct": "<p>Good, you did it! Now, you'll be asked a series of questions which you'll answer by adjusting the sliders.</p><p>There will be a long delay when you answer incorrectly, so you can finish faster by answering correctly.</p><p>Click <b>CONTINUE</b> to get started!</p>",
              "feedback_tryagain": "<p>Whoops! That's not correct. Try again, and click <b>SUBMIT</b> when you're ready. Call the experiment administrator if you need help.</p>",
              "feedback_incorrect": "<p>Whoops! Your answer is still incorrect, but let's go on anyway.</p><p>The <b>CONTINUE</b> button will be enabled after 10 seconds. Click <b>CONTINUE</b> to see the next question.</p>" },
              // general introduction
            // { "quesID": 0,
              // "text": "<p>The display shows graphs of binomial distributions for different numbers of repetitions and probabilities of success.</p><p>You can control the display with the sliders. The vertical one controls the number of repetitions, and the horizontal one controls the probability of success on each repetition. There are three possible settings for each slider.</p><p>Play around with the sliders, then set them to 40 repetitions with 50% probability of success. Click <b>SUBMIT</b> when you're done.</p>",
              // "key": [40,.50],
              // "force_correct": true,
              // "feedback_correct": "<p>Good, you did it! Now, you'll be asked a series of questions which you'll answer by adjusting the sliders.</p><p>There will be a long delay when you answer incorrectly, so you can finish faster by answering correctly.</p><p>Click <b>CONTINUE</b> to get started!</p>",
              // "feedback_tryagain": "<p>Whoops! That's not correct. Try again, and click <b>SUBMIT</b> when you're ready. Call the experiment administrator if you need help.</p>",
              // "feedback_incorrect": "<p>Whoops! Your answer is still incorrect, but let's go on anyway.</p><p>The <b>CONTINUE</b> button will be enabled after 10 seconds. Click <b>CONTINUE</b> to see the next question.</p>" },
            // location and height of the peak
            { "quesID": 5,
              "text": "<p>The peak of the graph is always located over the single most likely result, and its height indicates the likelihood that result will actually occur.  The next few questions will ask you to use the sliders to fix the location and height of the peak.</p><p>Click <b>CONTINUE</b> to go on.</p>" },
            { "quesID": 6,
              "text": "Set the sliders so that 75% is the most likely outcome and it is about 20% likely to occur.",
              "key": [20,.75],
              "feedback_incorrect": "<p>Notice that the peak of the graph is above 75% on the x-axis, and the height of the graph at that point is at about 20% on the y-axis.</p>" },
            { "quesID": 7,
              "text": "Set the sliders so that 50% is the most likely outcome and it is 15%-20% likely to occur.",
              "key": [20,.50],
              "feedback_incorrect": "<p>Notice that the peak of the graph is above 50% on the x-axis, and the height of the graph at that point is at about 15-20% on the y-axis.</p>" },
            { "quesID": 8,
              "text": "Set the sliders so that 50% is the most likely outcome and it is about 25% likely to occur.",
              "key": [40,.50],
              "feedback_incorrect": "<p>Notice that the peak of the graph is above 50% on the x-axis, and the height of the graph at that point is at about 25% on the y-axis.</p>" },
            { "quesID": 9,
              "text": "Set the sliders so that 50% is the most likely outcome and it is about 40% likely to occur.",
              "key": [100,.50],
              "feedback_incorrect": "<p>Notice that the peak of the graph is above 50% on the x-axis, and the height of the graph at that point is at about 40% on the y-axis.</p>" },
            { "quesID": 10,
              "text": "Set the sliders so that 25% is the most likely outcome and it is about 45% likely to occur.",
              "key": [100,.25],
              "feedback_incorrect": "<p>Notice that the peak of the graph is above 25% on the x-axis, and the height of the graph at that point is at about 45% on the y-axis.</p>" },
            { "quesID": 11,
              "text": "Set the probability of success to 75%, then set the number of repetitions so as to maximize the height of the peak.",
              "key": [100,.75],
              "feedback_incorrect": "<p>Notice that the graph's peak is tallest when the number of repetitions is set to 100.</p>" },
            { "quesID": 12,
              "text": "Set the number of repetitions to 100, then set the probability of success so as to minimize the height of the peak.",
              "key": [100,.50],
              "feedback_incorrect": "<p>Notice that the graph's peak is shorter when the probability of success is 50% than when it is 25% or 75%.</p>" },
            // likelihood of specific outcomes other than peak
            { "quesID": 13,
              "text": "<p>Even for results other than the most likely one, the height of the graph over each position on the x-axis indicates the likelihood that the corresponding result will occur.  The next few questions will ask you to use the sliders to maximize or minimize the probabilities of results other than the most likely result.</p><p>Click <b>CONTINUE</b> to go on.</p>" },
            { "quesID": 14,
              "text": "Set the sliders to maximize the likelihood of 10% successful outcomes.",
              "key": [20,.25],
              "feedback_incorrect": "<p>Notice that the height of the graph above 10% on the x-axis is tallest when the sliders are set this way.</p>" },
            { "quesID": 15,
              "text": "Set the sliders to maximize the likelihood of 90% successful outcomes.",
              "key": [20,.75],
              "feedback_incorrect": "<p>Notice that the height of the graph above 90% on the x-axis is tallest when the sliders are set this way.</p>" },
            { "quesID": 16,
              "text": "Set the probability of success to 75%. Then set the number of repetitions to minimize the likelihood of 90% successful outcomes.",
              "key": [100,.75],
              "feedback_incorrect": "<p>Notice that the height of the graph above 90% on the x-axis is shorter when the number of repetitions is set to 100 rather than 20 or 40.</p>" },
            { "quesID": 17,
              "text": "Set the number of repetitions to 40. Then set the probability of success to minimize the likelihood of 70% successful outcomes.",
              "key": [40,.25],
              "feedback_incorrect": "<p>Notice that the height of the graph above 70% on the x-axis is near zero when the probability of success is set to 25%, but is higher when it's set to 50% or 75%.</p>" },
            { "quesID": 18,
              "text": "Set the number of repetitions to 40. Then set the probability of success to maximize the likelihood of 70% successful outcomes.",
              "key": [40,.75],
              "feedback_incorrect": "<p>Notice that the height of the graph above 70% on the x-axis is highest when the probability of success is set to 75%.</p>" },
            { "quesID": 19,
              "text": "Set the probability of success to 50%. Then set the number of repetitions to maximize the likelihood of 30% successful outcomes.",
              "key": [20,.50],
              "feedback_incorrect": "<p>Notice that the height of the graph above 30% on the x-axis is higher when the number of repetitions is set to 20 instead of 40 or 100.</p>" },
            { "quesID": 20,
              "text": "Set the probability of success to 25%. Then set the number of repetitions to minimize the likelihood of 40% successful outcomes.",
              "key": [100,.25],
              "feedback_incorrect": "<p>Notice that the height of the graph above 40% on the x-axis is lower when the number of repetitions is set to 100 instead of 20 or 40.</p>" },
            { "quesID": 21,
              "text": "<p>In the next section, you'll be asked some questions to test your understanding of how the number of repetitions and probability of success affect the shape of the distribution.</p><p>The interactive graph will <b>not</b> be available to help, so play around with it more if you like, then click <b>CONTINUE</b> when you're ready to go on.</p>" }
            ];
    // power law of practice
    } else if ( topic=="Power Law" ) {
        questions = [
            { "quesID": 0,
              "text": "<p>The display shows graphs of power law of practice curves for different initial times and learning rates. Just like before, this tutorial will first explain how to use the interactive display, and then you'll have a chance to practice with it.</p><p>Click <b>CONTINUE</b> to start.</p>" },
            { "quesID": 1,
              "text": "<p>First, look at the vertical slider on the left of the display. This slider controls the initial time it takes to perform an action, such as how many seconds it takes to whack the first mole. It can be set to 3 different values: 1, 3, and 5.</p><p>Try changing it to 3 by clicking in the middle of the vertical slider. Then change it to 5 by clicking at the top. Leave the horizontal slider where it is now (0.6). Click <b>SUBMIT</b> when you are done.</p>",
              "key": [5,0.6],
              "force_correct": true,
              "feedback_correct": "<p>Good, you did it! Click <b>CONTINUE</b> to go on to the next page.</p>",
              "feedback_tryagain": "<p>Whoops! That's not correct. Try again, and click <b>SUBMIT</b> when you're ready. Call the experiment administrator if you need help.</p>",
              "feedback_incorrect": "<p>Whoops! Your answer is still incorrect, but let's go on anyway.</p><p>The <b>CONTINUE</b> button will be enabled after 10 seconds. Click <b>CONTINUE</b> to see the next question.</p>" },
            { "quesID": 2,
              "text": "<p>Now, look at the horizontal slider at the top of the display. This slider controls the learning rate, such as how fast someone's mole-whacking speed improves with practice. It can be set to 3 different values: 0.6, 1.0, and 1.4.</p><p>Try changing it to 1.0 by clicking in the middle of the horizontal slider. Then change it to 1.4 by clicking at the far right. Leave the vertical slider where it is now (1). Click <b>SUBMIT</b> when you are done.</p>",
              "key": [1,1.4],
              "force_correct": true,
              "feedback_correct": "<p>Good, you did it! Click <b>CONTINUE</b> to go on to the next page.</p>",
              "feedback_tryagain": "<p>Whoops! That's not correct. Try again, and click <b>SUBMIT</b> when you're ready. Call the experiment administrator if you need help.</p>",
              "feedback_incorrect": "<p>Whoops! Your answer is still incorrect, but let's go on anyway.</p><p>The <b>CONTINUE</b> button will be enabled after 10 seconds. Click <b>CONTINUE</b> to see the next question.</p>" },
            { "quesID": 3,
              "text": "<p>When you change the sliders, you can see how the graph changes as a result. The x-axis shows the number of trials, such as how many times someone has whacked moles so far. The y-axis shows the response time for each trial, e.g. how long it takes to do each whack.</p><p>For example, notice that in the graph when 'x' is 1, then 'y' is 1.0. That means the 1st whack takes 1.0 seconds. On the other hand, when 'x' is 10, then 'y' is less than 0.5, meaning that the 10th whack takes less than 0.5 seconds.</p><p>Click <b>CONTINUE</b> to go on.</p>" },
            { "quesID": 4,
              "text": "<p>Try setting the sliders so that the initial time is 3, and the learning rate is 1.4. See what happens to the graph.  Click <b>SUBMIT</b> when you are done.</p>",
              "key": [3,1.4],
              "force_correct": true,
              "feedback_correct": "<p>Good, you did it! Now, you'll be asked a series of questions which you'll answer by adjusting the sliders.</p><p>There will be a long delay when you answer incorrectly, so you can finish faster by answering correctly.</p><p>Click <b>CONTINUE</b> to get started!</p>",
              "feedback_tryagain": "<p>Whoops! That's not correct. Try again, and click <b>SUBMIT</b> when you're ready. Call the experiment administrator if you need help.</p>",
              "feedback_incorrect": "<p>Whoops! Your answer is still incorrect, but let's go on anyway.</p><p>The <b>CONTINUE</b> button will be enabled after 10 seconds. Click <b>CONTINUE</b> to see the next question.</p>" },
            // // general introduction
            // { "quesID": 0,
              // "text": "<p>The display shows graphs of power law of practice curves for different initial times and learning rates.</p><p>You can control the display with the sliders. The vertical one controls the initial time, and the horizontal one controls the learning rate. There are three possible settings for each slider.</p><p>Play around with the sliders, then set them to initial time = 3 seconds, learning rate = 1.4. Click <b>SUBMIT</b> when you're done.</p>",
              // "key": [3,1.4],
              // "force_correct": true,
              // "feedback_correct": "<p>Good, you did it! Now, you'll be asked a series of questions which you'll answer by adjusting the sliders.</p><p>There will be a long delay when you answer incorrectly, so you can finish faster by answering correctly.</p><p>Click <b>CONTINUE</b> to get started!</p>",
              // "feedback_tryagain": "<p>Whoops! That's not correct. Try again, and click <b>SUBMIT</b> when you're ready. Call the experiment administrator if you need help.</p>",
              // "feedback_incorrect": "<p>Whoops! Your answer is still incorrect, but let's go on anyway.</p><p>The <b>CONTINUE</b> button will be enabled after 10 seconds. Click <b>CONTINUE</b> to see the next question.</p>" },
            // height of the graph overall & at specific points
            { "quesID": 5,
              "text": "<p>The height of the graph on the y-axis for each point on the x-axis shows you what the response time will be after each number of trials.  The next few questions will ask you to use the sliders to control the response times.</p><p>Click <b>CONTINUE</b> to go on.</p>" },
            { "quesID": 6,
              "text": "Set the sliders so that response times are as long as possible for all numbers of trials.",
              "key": [5,0.6],
              "feedback_incorrect": "<p>Notice that the height of the graph is as high or higher for these settings than for any other settings, regardless of the number of trials.</p>" },
            { "quesID": 7,
              "text": "Set the sliders so that response times are as short as possible for all numbers of trials.",
              "key": [1,1.4],
              "feedback_incorrect": "<p>Notice that the height of the graph is as low or lower for these settings than for any other settings, regardless of the number of trials.</p>" },
            { "quesID": 8,
              "text": "Set the sliders so that response time at 2 trials is longer than 0.5 seconds but shorter than 1.0 seconds.",
              "key": [1,0.6],
              "feedback_incorrect": "<p>Notice that at 2 trials on the x-axis, the height of the graph on the y-axis is between 0.5 seconds and 1.0 seconds.</p>" },
            // steepness of the graph
            { "quesID": 9,
              "text": "<p>The 'steepness' of the graph shows you how fast response times are decreasing as the number of trials increases.  The next few questions will ask you to use the sliders to control how fast response times decrease.</p><p>Click <b>CONTINUE</b> to go on.</p>" },
            { "quesID": 10,
              "text": "Set the learning rate at 1.0, then set the initial time so that response time decreases by as large an amount (not ratio) as possible with each additional trial.",
              "key": [5,1.0],
              "feedback_incorrect": "<p>Notice that the graph is steepest when the initial time is 5 seconds.  If you can't see the steepness clearly, you can estimate it by seeing how much the graph's height decreases from 1 trial to 2 trials, from 2 trials to 3, and so on.</p>" },
            { "quesID": 11,
              "text": "Set the learning rate at 1.0, then set the initial time so that response time decreases by as small an amount (not ratio) as possible with each additional trial.",
              "key": [1,1.0],
              "feedback_incorrect": "<p>Notice that the graph is least steep when the initial time is 1 second.  If you can't see the steepness clearly, you can estimate it by seeing how much the graph's height decreases from 1 trial to 2 trials, from 2 trials to 3, and so on.</p>" },
            { "quesID": 12,
              "text": "Set the initial time at 3 seconds, then set the learning rate so that response time decreases by as large an amount as possible with each additional trial.",
              "key": [3,1.4],
              "feedback_incorrect": "<p>Notice that the graph is steepest when the learning rate is 1.4.  If you can't see the steepness clearly, you can estimate it by seeing how much the graph's height decreases from 1 trial to 2 trials, from 2 trials to 3, and so on.</p>" },
            { "quesID": 13,
              "text": "Set the initial time at 3 seconds, then set the learning rate so that response time decreases by as small an amount as possible with each additional trial.",
              "key": [3,0.6],
              "feedback_incorrect": "<p>Notice that the graph is least steep when the learning rate is 0.6.  If you can't see the steepness clearly, you can estimate it by seeing how much the graph's height decreases from 1 trial to 2 trials, from 2 trials to 3, and so on.</p>" },
            // decrease of response time over a given period
            { "quesID": 14,
              "text": "<p>Besides looking at <b>HOW MUCH</b> response time decreases, it's also important to look at the <b>PERCENT or RATIO</b> by which response time decreases.  The next few questions will ask you to use the sliders to control this ratio.</p><p>Click <b>CONTINUE</b> to go on.</p>" },
            { "quesID": 15,
              "text": "Set the sliders so that response time at 1 trial is 3 seconds, and response time decreases by exactly half each time the number of trials doubles.  So, for example, response time should be 1.5 seconds at 2 trials, and .75 seconds at 4 trials.",
              "key": [3,1.0],
              "feedback_incorrect": "<p>Notice that the height of the graph on the y-axis is at 3 seconds when the number of trials on the x-axis is 1, but drops to exactly half, i.e. 1.5 seconds, when the number of trials doubles to 2.</p>" },
            { "quesID": 16,
              "text": "Set the initial time and learning rate so that response time at 1 trial is 3 seconds, and response time decreases by less than half each time the number of trials doubles.  So, for example, response time should be more than 1.5 seconds at 2 trials, and more than .75 at 4 trials.",
              "key": [3,0.6],
              "feedback_incorrect": "<p>Notice that the height of the graph on the y-axis is at 3 seconds when the number of trials on the x-axis is 1, and drops by less than half, to about 2.0 seconds, when the number of trials doubles to 2.</p>" },
            { "quesID": 17,
              "text": "Set the initial time and learning rate so that response time at 1 trial is 1 second, and response time decreases by more than half each time the number of trials doubles.  So, for example, response time should be less than 0.5 seconds at 2 trials, and less than 0.25 seconds at 4 trials.",
              "key": [1,1.4],
              "feedback_incorrect": "<p>Notice that the height of the graph on the y-axis is at 1 second when the number of trials on the x-axis is 1, and drops by more than half, to about 0.4 seconds, when the number of trials doubles to 2.</p>" },
            // comparisons between graphs
            { "quesID": 18,
              "text": "<p>Depending on the initial time and learning rates of different people, one person might start out slower than another person but later become faster, or one person might <b>always</b> be faster than another. The next questions will ask you to compare the graphs for different people.</p><p>Click <b>CONTINUE</b> to go on.</p>" },
            { "quesID": 19,
              "text": "Set the initial time to 1 second and the learning rate to 0.6.  Then, change the sliders so that the new graph shows 5 times longer response times than the previous one, for <b>all</b> numbers of trials.",
              "key": [5,0.6],
              "feedback_incorrect": "<p>Notice that if you keep the learning rate as 0.6, the graph for initial time = 5 seconds is always 5 times higher than the graph for initial time = 1 second, for any number of trials.</p>" },
            { "quesID": 20,
              "text": "Set the initial time to 5 seconds and the learning rate to 1.0.  Then, change the sliders so that the new graph shows 3/5ths the response times of the previous one, for <b>all</b> numbers of trials.",
              "key": [3,1.0],
              "feedback_incorrect": "<p>Notice that if you keep the learning rate as 1.0, the graph for initial time = 3 seconds is always 3/5ths the height of the graph for initial time = 5 seconds, for any number of trials.</p>" },
            { "quesID": 21,
              "text": "Set the initial time to 5 seconds and the learning rate to 1.4.  Then, change the sliders so that the new graph, compared to the previous one, shows shorter response time on trial 1, about the same response time on trial 2, and longer response time after trial 2.",
              "key": [3,0.6],
              "feedback_incorrect": "<p>Notice that at 1 trial, the graph for initial time = 3 seconds and learning rate = 0.6 is lower, i.e. faster, than the other graph, but it becomes higher when the number of trials is more than 2.</p>" },
            { "quesID": 22,
              "text": "Set the initial time to 3 seconds and the learning rate to 0.6.  Then, change the sliders so that the new graph, compared to the previous one, shows longer response time on trial 1, about the same response time on trial 2, and shorter response time after trial 2.",
              "key": [5,1.4],
              "feedback_incorrect": "<p>Notice that at 1 trial, the graph for initial time = 5 seconds and learning rate = 1.4 is higher, i.e. slower, than the other graph, but it becomes lower when the number of trials is higher than 2.</p>" },
            { "quesID": 23,
              "text": "<p>In the next section, you'll be asked some questions to test your understanding of how the inital time and learning rate affect the shape of the distribution.</p><p>The interactive graph will <b>not</b> be available to help, so play around with it more if you like, then click <b>CONTINUE</b> when you're ready to go on.</p>" }
            ];
    }
    for ( var i=0; i<questions.length; i++ ) {
        // for actual questions, as opposed to transitional text,
        // add some standardized text and feedback for correct and incorrect responses
        if ( (i!=0) && (questions[i].key!=undefined) && (!questions[i].force_correct) ) {
            questions[i].text = "<p><b>QUESTION:</b></p><p>" + questions[i].text + "</p><p>Click <b>SUBMIT</b> when you think you have found the right settings.</p>";
            questions[i]["feedback_correct"] = "<p>Yes, you are right!</p><p>Click <b>CONTINUE</b> to see the next question.</p>";
            questions[i]["feedback_tryagain"] = "<p>Whoops! Your answer is incorrect. Try again.</p>";            
            if ( topic=="Binomial" ) {
                questions[i].feedback_incorrect = "<p>Whoops! Your answer was still not correct. The answer should be " + questions[i].key[0] + " repetitions with " + (questions[i].key[1]*100 ) + "% probability of success. The sliders have been set to the correct values.</p>" + questions[i].feedback_incorrect + "<p>The <b>CONTINUE</b> button will be enabled after 10 seconds. Click <b>CONTINUE</b> to see the next question.</p>";
            } else if ( topic=="Power Law" ) {
                questions[i].feedback_incorrect = "<p>Whoops! Your answer was still not correct. The answer should be initial time=" + questions[i].key[0] + " with learning rate=" + (Number(questions[i].key[1]).toFixed(1)) + ". The sliders have been set to the correct values.</p>" + questions[i].feedback_incorrect + "<p>The <b>CONTINUE</b> button will be enabled after 10 seconds. Click <b>CONTINUE</b> to see the next question.</p>";
            }
        }
    }
    
    var data = [];
    for ( var i=0; i<questions.length; i++ ) {
        data.push( { "section": "Practice", "temporal": temporal, "topic": topic, "number": i, "stimID": questions[i].quesID } );
    }
//    questions = questions.slice(0,2);
    return { "type": "training",
             "mode": mode,
             "presenterSpecs": { "functionType": topic, "spatialOrg": spatial, "temporalOrg": temporal, "mask": mask },
             "questions": questions,
             "data": data };
}


//////////////////////////////////////////
// Test
//////////////////////////////////////////

function getTestBlock( topic, temporal, mode ) {
    var intro, questions, specs;
    // introduction (same for binomial and power law)
    intro = [
        { "quesID": 0, "plugin": "text",
          "text": "<p><img src='stimuli/smiley20face_thumbsup.jpg' alt='Smiley Face!'></p><p>Great! You've finished the practice section. In the next part, you'll be tested on what you just learned. Take a break if you want, or click below to get started!</p>" }
        ];
    // questions for binomial
    // recall questions
    questions = { "Binomial": [
        { "quesID": 1, "plugin": "radio",
          "text": "<p>The graph shown below is the graph for which number of repetitions and probability of success?</p>\
                   <p><img src='stimuli/binomial_unlabeled_00.png' alt='stimuli/binomial_unlabeled_00.png' class='graph_in_text'></p>",
          "answers": [ "20 repetitions with 25% probability of success",
                       "20 repetitions with 75% probability of success",
                       "100 repetitions with 25% probability of success",
                       "100 repetitions with 75% probability of success" ],
          "key": 0 },
        { "quesID": 2, "plugin": "radio",
          "text": "<p>The graph shown below is the graph for which number of repetitions and probability of success?</p>\
                   <p><img src='stimuli/binomial_unlabeled_02.png' alt='stimuli/binomial_unlabeled_02.png' class='graph_in_text'></p>",
          "answers": [ "20 repetitions with 25% probability of success",
                       "20 repetitions with 75% probability of success",
                       "100 repetitions with 25% probability of success",
                       "100 repetitions with 75% probability of success" ],
          "key": 1 },
        { "quesID": 3, "plugin": "radio",
          "text": "<p>The graph shown below is the graph for which number of repetitions and probability of success?</p>\
                   <p><img src='stimuli/binomial_unlabeled_20.png' alt='stimuli/binomial_unlabeled_20.png' class='graph_in_text'></p>",
          "answers": [ "20 repetitions with 25% probability of success",
                       "20 repetitions with 75% probability of success",
                       "100 repetitions with 25% probability of success",
                       "100 repetitions with 75% probability of success" ],
          "key": 2 },
        { "quesID": 4, "plugin": "radio",
          "text": "<p>The graph shown below is the graph for which number of repetitions and probability of success?</p>\
                   <p><img src='stimuli/binomial_unlabeled_22.png' alt='stimuli/binomial_unlabeled_22.png' class='graph_in_text'></p>",
          "answers": [ "20 repetitions with 25% probability of success",
                       "20 repetitions with 75% probability of success",
                       "100 repetitions with 25% probability of success",
                       "100 repetitions with 75% probability of success" ],
          "key": 3 },
        { "quesID": 5, "plugin": "radio",
          "text": "Which of the following is the graph for 20 repetitions with 50% probability of success?",
          "answers": [ "<img src='stimuli/binomial_unlabeled_01.png' alt='stimuli/binomial_unlabeled_01.png' class='graph_in_text'>",
                       "<img src='stimuli/binomial_unlabeled_10.png' alt='stimuli/binomial_unlabeled_10.png' class='graph_in_text'>",
                       "<img src='stimuli/binomial_unlabeled_21.png' alt='stimuli/binomial_unlabeled_21.png' class='graph_in_text'>",
                       "<img src='stimuli/binomial_unlabeled_12.png' alt='stimuli/binomial_unlabeled_12.png' class='graph_in_text'>" ],
          "key": 0 },
        { "quesID": 6, "plugin": "radio",
          "text": "Which of the following is the graph for 40 repetitions with 25% probability of success?",
          "answers": [ "<img src='stimuli/binomial_unlabeled_01.png' alt='stimuli/binomial_unlabeled_01.png' class='graph_in_text'>",
                       "<img src='stimuli/binomial_unlabeled_10.png' alt='stimuli/binomial_unlabeled_10.png' class='graph_in_text'>",
                       "<img src='stimuli/binomial_unlabeled_21.png' alt='stimuli/binomial_unlabeled_21.png' class='graph_in_text'>",
                       "<img src='stimuli/binomial_unlabeled_12.png' alt='stimuli/binomial_unlabeled_12.png' class='graph_in_text'>" ],
          "key": 1 },
        { "quesID": 7, "plugin": "radio",
          "text": "Which of the following is the graph for 100 repetitions with 50% probability of success?",
          "answers": [ "<img src='stimuli/binomial_unlabeled_01.png' alt='stimuli/binomial_unlabeled_01.png' class='graph_in_text'>",
                       "<img src='stimuli/binomial_unlabeled_10.png' alt='stimuli/binomial_unlabeled_10.png' class='graph_in_text'>",
                       "<img src='stimuli/binomial_unlabeled_21.png' alt='stimuli/binomial_unlabeled_21.png' class='graph_in_text'>",
                       "<img src='stimuli/binomial_unlabeled_12.png' alt='stimuli/binomial_unlabeled_12.png' class='graph_in_text'>" ],
          "key": 2 },
        { "quesID": 8, "plugin": "radio",
          "text": "Which of the following is the graph for 40 repetitions with 75% probability of success?",
          "answers": [ "<img src='stimuli/binomial_unlabeled_01.png' alt='stimuli/binomial_unlabeled_01.png' class='graph_in_text'>",
                       "<img src='stimuli/binomial_unlabeled_10.png' alt='stimuli/binomial_unlabeled_10.png' class='graph_in_text'>",
                       "<img src='stimuli/binomial_unlabeled_21.png' alt='stimuli/binomial_unlabeled_21.png' class='graph_in_text'>",
                       "<img src='stimuli/binomial_unlabeled_12.png' alt='stimuli/binomial_unlabeled_12.png' class='graph_in_text'>" ],
          "key": 3 },
      // comprehension questions
        { "quesID": 9, "plugin": "radio",
          "text": "How does the number of repetitions affect which single proportion of successes is most likely, if at all?",
          "answers": [ "The most likely proportion of successes is smaller when the number of repetitions is larger.",
                       "The most likely proportion of successes is larger when the number of repetitions is larger.",
                       "The most likely proportion of successes is closer to 50% when the number of repetitions is larger.",
                       "The most likely proportion of successes is unaffected by the number of repetitions." ],
          "key": 3 },
        { "quesID": 10, "plugin": "radio",
          "text": "How does the probability of success affect which single proportion of successes is most likely, if at all?",
          "answers": [ "The most likely proportion of successes is smaller when the probability of success is larger.",
                       "The most likely proportion of successes is larger when the probability of success is larger.",
                       "The most likely proportion of successes is closer to 50% when the probability of success is larger.",
                       "The most likely proportion of successes is unaffected by the probability of success." ],
          "key": 1 },
        { "quesID": 11, "plugin": "radio",
          "text": "How does the number of repetitions affect the actual likelihood of the single most likely proportion of successes, if at all?",
          "answers": [ "The likelihood of the single most likely outcome is larger when the number of repetitions is larger.",
                       "The likelihood of the single most likely outcome is larger when the number of repetitions is smaller.",
                       "The likelihood of the single most likely outcome is larger when the number of repetitions is extreme, i.e. very large or very small.",
                       "The likelihood of the single most likely outcome is unaffected by the number of repetitions." ],
          "key": 0 },    
        { "quesID": 12, "plugin": "radio",
          "text": "How does the probability of success affect the actual likelihood of the single most likely proportion of successes, if at all?",
          "answers": [ "The likelihood of the single most likely outcome is larger when the probability of success is larger.",
                       "The likelihood of the single most likely outcome is larger when the probability of success is smaller.",
                       "The likelihood of the single most likely outcome is larger when the probability of success is extreme, i.e. very large or very small.",
                       "The likelihood of the single most likely outcome is unaffected by the probability of success." ],
          "key": 2 },
        { "quesID": 13, "plugin": "radio",
          "text": "Which probability of success makes it more likely that the proportion of successful outcomes will be 45%?",
          "answers": [ "25% probability of success",
                       "50% probability of success",
                       "The likelihood is equal for both 25% and 50% probability of success",
                       "The answer depends on the number of repetitions" ],
          "key": 1 },
        { "quesID": 14, "plugin": "radio",
          "text": "Which statement describes the effect of the probability of success on the likelihood of 85% successful outcomes?",
          "answers": [ "The larger the probability of success, the higher the likelihood",
                       "The smaller the probability of success, the higher the likelihood",
                       "The closer the probability of success to 85%, the higher the likelihood",
                       "The answer depends on the number of repetitions" ],
          "key": 2 },
        { "quesID": 15, "plugin": "radio",
          "text": "Which number of repetitions makes it more likely that the proportion of successful outcomes will be 50%?",
          "answers": [ "20 repetitions",
                       "100 repetitions",
                       "The likelihood is equal for both 20 and 100 repetitions",
                       "The answer depends on the probability of success" ],
          "key": 3 },
        { "quesID": 16, "plugin": "radio",
          "text": "Suppose the probability of success is 25%. Which statement describes the effect of the number of repetitions on the likelihood that the proportion of successful outcomes is very small, e.g. less than 5%?",
          "answers": [ "The likelihood is higher when the number of repetitions is smaller",
                       "The likelihood is higher when the number of repetitions is larger",
                       "The likelihood is higher when the number of repetitions is closer to some specific number",
                       "The likelihood does not depend on the number of repetitions" ],
          "key": 0 }
      // questions for power law
      // recall questions
        ], "Power Law": [
        { "quesID": 1, "plugin": "radio",
          "text": "<p>The graph shown below is the graph for which initial time and learning rate?</p>\
                   <p><img src='stimuli/power_unlabeled_00.png' alt='stimuli/power_unlabeled_00.png' class='graph_in_text'></p>",
          "answers": [ "1 second initial time with learning rate=0.6",
                       "1 second initial time with learning rate=1.4",
                       "5 seconds initial time with learning rate=0.6",
                       "5 seconds initial time with learning rate=1.4" ],
          "key": 0 },
        { "quesID": 2, "plugin": "radio",
          "text": "<p>The graph shown below is the graph for which initial time and learning rate?</p>\
                   <p><img src='stimuli/power_unlabeled_02.png' alt='stimuli/power_unlabeled_02.png' class='graph_in_text'></p>",
          "answers": [ "1 second initial time with learning rate=0.6",
                       "1 second initial time with learning rate=1.4",
                       "5 seconds initial time with learning rate=0.6",
                       "5 seconds initial time with learning rate=1.4" ],
          "key": 1 },
        { "quesID": 3, "plugin": "radio",
          "text": "<p>The graph shown below is the graph for which initial time and learning rate?</p>\
                   <p><img src='stimuli/power_unlabeled_20.png' alt='stimuli/power_unlabeled_20.png' class='graph_in_text'></p>",
          "answers": [ "1 second initial time with learning rate=0.6",
                       "1 second initial time with learning rate=1.4",
                       "5 seconds initial time with learning rate=0.6",
                       "5 seconds initial time with learning rate=1.4" ],
          "key": 2 },
        { "quesID": 4, "plugin": "radio",
          "text": "<p>The graph shown below is the graph for which initial time and learning rate?</p>\
                   <p><img src='stimuli/power_unlabeled_22.png' alt='stimuli/power_unlabeled_22.png' class='graph_in_text'></p>",
          "answers": [ "1 second initial time with learning rate=0.6",
                       "1 second initial time with learning rate=1.4",
                       "5 seconds initial time with learning rate=0.6",
                       "5 seconds initial time with learning rate=1.4" ],
          "key": 3 },
        { "quesID": 5, "plugin": "radio",
          "text": "Which of the following is the graph for 1 second initial time with learning rate=1.0?",
          "answers": [ "<img src='stimuli/power_unlabeled_01.png' alt='stimuli/power_unlabeled_01.png' class='graph_in_text'>",
                       "<img src='stimuli/power_unlabeled_21.png' alt='stimuli/power_unlabeled_21.png' class='graph_in_text'>",
                       "<img src='stimuli/power_unlabeled_10.png' alt='stimuli/power_unlabeled_10.png' class='graph_in_text'>",
                       "<img src='stimuli/power_unlabeled_12.png' alt='stimuli/power_unlabeled_12.png' class='graph_in_text'>" ],
          "key": 0 },
        { "quesID": 6, "plugin": "radio",
          "text": "Which of the following is the graph for 5 seconds initial time with learning rate=1.0?",
          "answers": [ "<img src='stimuli/power_unlabeled_01.png' alt='stimuli/power_unlabeled_01.png' class='graph_in_text'>",
                       "<img src='stimuli/power_unlabeled_21.png' alt='stimuli/power_unlabeled_21.png' class='graph_in_text'>",
                       "<img src='stimuli/power_unlabeled_10.png' alt='stimuli/power_unlabeled_10.png' class='graph_in_text'>",
                       "<img src='stimuli/power_unlabeled_12.png' alt='stimuli/power_unlabeled_12.png' class='graph_in_text'>" ],
          "key": 1 },
        { "quesID": 7, "plugin": "radio",
          "text": "Which of the following is the graph for 3 seconds initial time with learning rate=0.6?",
          "answers": [ "<img src='stimuli/power_unlabeled_01.png' alt='stimuli/power_unlabeled_01.png' class='graph_in_text'>",
                       "<img src='stimuli/power_unlabeled_21.png' alt='stimuli/power_unlabeled_21.png' class='graph_in_text'>",
                       "<img src='stimuli/power_unlabeled_10.png' alt='stimuli/power_unlabeled_10.png' class='graph_in_text'>",
                       "<img src='stimuli/power_unlabeled_12.png' alt='stimuli/power_unlabeled_12.png' class='graph_in_text'>" ],
          "key": 2 },
        { "quesID": 8, "plugin": "radio",
          "text": "Which of the following is the graph for 3 seconds initial time with learning rate=1.4?",
          "answers": [ "<img src='stimuli/power_unlabeled_01.png' alt='stimuli/power_unlabeled_01.png' class='graph_in_text'>",
                       "<img src='stimuli/power_unlabeled_21.png' alt='stimuli/power_unlabeled_21.png' class='graph_in_text'>",
                       "<img src='stimuli/power_unlabeled_10.png' alt='stimuli/power_unlabeled_10.png' class='graph_in_text'>",
                       "<img src='stimuli/power_unlabeled_12.png' alt='stimuli/power_unlabeled_12.png' class='graph_in_text'>" ],
          "key": 3 },
      // comprehension questions
        { "quesID": 9, "plugin": "radio",
          "text": "How does the initial time affect the amount (not ratio) by which response time decreases per trial?",
          "answers": [ "The higher the initial time, the more the response time decreases per trial",
                       "The lower the initial time, the more the response time decreases per trial",
                       "The initial time does not affect how much response time decreases per trial",
                       "More than one of the above answers could be correct, depending on the learning rate" ],
          "key": 0 },
        { "quesID": 10, "plugin": "radio",
          "text": "How does the initial time affect the number of trials required to cut response time in half?",
          "answers": [ "The higher the initial time, the larger the number of trials required",
                       "The higher the initial time, the smaller the number of trials required",
                       "The initial time does not affect how many trials are required",
                       "More than one of the above answers could be correct, depending on the learning rate." ],
          "key": 2 },
        { "quesID": 11, "plugin": "radio",
          "text": "How does the learning rate affect the amount (not ratio) by which response time decreases per trial?",
          "answers": [ "The higher the learning rate, the more the response time decreases per trial",
                       "The lower the learning rate, the more the response time decreases per trial",
                       "The learning rate does not affect how much response time decreases per trial",
                       "More than one of the above answers could be correct, depending on the initial time" ],
          "key": 0 },
        { "quesID": 12, "plugin": "radio",
          "text": "How does the learning rate affect the number of trials required to cut response time in half?",
          "answers": [ "The higher the learning rate, the larger the number of trials required",
                       "The higher the learning rate, the smaller the number of trials required",
                       "The learning rate does not affect how many trials are required",
                       "More than one of the above answers could be correct, depending on the initial time" ],
          "key": 1 },
        { "quesID": 13, "plugin": "radio",
          "text": "For which of these initial times and learning rates will the response time on trial 4 be 25% of the response time on trial 1?",
          "answers": [ "Initial time = 4 seconds, learning rate = 1.6",
                       "Initial time = 2.5 seconds, learning rate = 1.6",
                       "Initial time = 2.5 seconds, learning rate = 0.4",
                       "Initial time = 2.5 seconds, learning rate = 1.0" ],
          "key": 3 },
        { "quesID": 14, "plugin": "radio",
          "text": "Suppose persons A and B have the same initial time, but person A's learning rate is 0.6, while person B's learning rate is 1.0. Then ...",
          "answers": [ "For all trials after the first, Person A's response time will be 0.4 seconds faster than person B's",
                       "For all trials after the first, Person A's response time will be 0.4 seconds slower than person B's",
                       "For all trials after the first, Person A's response time will be 40% faster than person B's",
                       "None of the above statements are true" ],
          "key": 3 },
        { "quesID": 15, "plugin": "radio",
          "text": "Suppose persons A and B have the same learning rate, but person A's initial time is 2, while person B's initial time is 4. Then ...",
          "answers": [ "Person B's response time will be 2 seconds more than person A's, for any number of trials",
                       "Person B's response time will be twice person A's, for any number of trials",
                       "Both of the above statements are true",
                       "None of the above statements are true" ],
          "key": 1 },
        { "quesID": 16, "plugin": "radio",
          "text": "Suppose person A has initial time 2 and learning rate 0.6, while person B has initial time 4 and learning rate 1.0. Then ...",
          "answers": [ "Person A will always be faster than person B, for any number of trials",
                       "Person B will always be faster than person A, for any number of trials",
                       "Which of person A or person B is faster depends on the number of trials",
                       "None of the above statements are true" ],
          "key": 2 }
        ] }[ topic ];
    specs = intro.concat( shuffle( questions ) );
    // specs = intro.concat( questions );
    var data = [];
    for ( var i=0; i<specs.length; i++ ) {
        data.push( { "section": "Test", "temporal": temporal, "topic": topic, "number": i, "stimID": specs[i].quesID } );
        if ( specs[i].key!=undefined ) {
            if ( topic=="Binomial" ) {
                data[i]["questype"] = (specs[i].quesID<9) ? "Recall" : "Comprehension" ;
            } else if ( topic=="Power Law" ) {
                data[i]["questype"] = (specs[i].quesID<9) ? "Recall" : "Comprehension" ;
            }
        } else {
            data[i]["questype"] = "Text";
        }
    }
    return { "type": "survey", "mode": mode, "timing": 500, "specs": specs, "data": data };
}


//////////////////////////////////////////
// Background
//////////////////////////////////////////

function getBackgroundSurvey( mode ) {
    var background_specs = [
        // 0 intro
        { "plugin": "text", "text": "<p><img src='stimuli/smiley20face_thumbsup.jpg' alt='Smiley Face!'></p><p>Congratulations! You've finished the study.</p><p>Last of all, would you mind answering a few questions? This will only take a minute - really!</p>" },
        // 1 comments
        { "plugin": "essay", "text": "Do you have any comments or suggestions for us about this study?" },
        // 2 helpfulness
        { "plugin": "radio", "text": "How helpful were the interactive graphs with sliders to you for learning about binomial distributions and power laws?", "answers": [ "Not at all helpful", "Not very helpful", "So-so", "Somewhat helpful", "Very helpful" ] },
        // 3 previous experience with binomial
        { "plugin": "radio", "text": "Had you ever studied or learned about <b>binomial distributions</b> before participating in this study?", "answers": [ "No", "Not sure", "Yes" ] },
        // 4 previous experience with power law
        { "plugin": "radio", "text": "Had you ever studied or learned about <b>power laws</b> before participating in this study?", "answers": [ "No", "Not sure", "Yes" ] },
        // 5 sex
        { "plugin": "radio", "text": "Are you male or female?", "answers": [ "Male", "Female" ] },
        // 6 age
        { "plugin": "radio", "text": "How old are you?", "answers": [ "Under 18", "18 to 21", "22 to 25", "26 to 30", "31 to 35", "36 to 40", "41 or over" ] },
        // 7 education
        { "plugin": "radio", "text": "What is the highest level of education you have completed?", "answers": [ "Below high school", "High school / GED", "Some college", "2-year college degree", "4-year college degree", "Master's degree", "Doctoral degree", "Professional degree (JD, MD, etc.)" ] },
        // 8 SAT math
        { "plugin": "number", "text": "Which of the following is <strong>your highest score on the SAT MATH section</strong>? (If you have not taken the SAT, or do not remember your score on the MATH section, please choose one of the last two responses.)", "minimum": 200, "maximum": 800, "answers": [ "Did not take the SAT", "Do not remember my score on the SAT MATH" ] },
        // 9 ACT math
        { "plugin": "number", "text": "Which of the following is <strong>your highest score on the ACT MATH section</strong>? (If you have not taken the ACT, or do not remember your score on the MATH section, please choose one of the last two responses.)", "minimum": 1, "maximum": 36, "answers": [ "Did not take the ACT", "Do not remember my score on the ACT MATH" ] } /*,
        // 10 math anxiety
        { "plugin": "radio", "text": "To what extent do you feel tense or anxious about mathematics classes, homework, and tests?", "answers": [ "Not at all tense or anxious", "Not very tense or anxious", "A little tense and anxious", "Somewhat tense and anxious", "Very tense and anxious" ] },
        // 11 math coursework
        { "plugin": "checkbox", "text": "Which of the following mathematics courses have you ever taken and completed with a grade of at least C-?", "answers": [ "High School Algebra / Pre-Calculus", "College Algebra / Pre-Calculus", "High School Calculus", "College Calculus", "College Calculus II", "Finite Math", "Any college math courses higher than those above" ] } */ ];
    var background_data = [];
    for ( var i=0; i<background_specs.length; i++ ) {
        background_data.push( { "section": "Background", "number": i } );
    }
    return { "type": "survey", "mode": mode, "timing": 250, "specs": background_specs, "data": background_data };
}


//////////////////////////////////////////
// Other stuff
//////////////////////////////////////////

function getGeneralIntro( mode ) {
    var specs_text = [
        "<p>This experiment consists of two main parts. In each one, you'll learn about one type of data pattern. Because these data patterns are important in psychology, what you learn in this experiment will definitely be useful in the future.</p><p>Each part consists of 3 subsections. First, you'll read a tutorial about one type of data pattern. Second, you'll practice with the data pattern using an interactive graph. Third, you'll take a short test.</p><p>Click below to get started!</p>"
        ];
    var specs = new Array( specs_text.length );
    for ( var i=0; i<specs_text.length; i++ ) {
        specs[i] = { "plugin": "text", "text": specs_text[i] };
    }
    var data = [];
    for ( var i=0; i<specs.length; i++ ) {
        data.push( { "section": "Introduction", "number": i } );
    }
    return { "type": "survey", "mode": mode, "timing": 500, "specs": specs, "data": data };
}

// entrance_turk and entrance_nonturk
// edit according to what you want displayed on the opening screen
// (Turkers will see this when previewing the HIT)
// do not delete or change the id of nextPageButton

var entrance_turk = "\
    <p>Thank you for your interest in our survey.</p> \
    <p>In this task you will:</p> \
    <ol> \
        <li>Read a consent form and give your consent to participate in this study.</li> \
        <li>Do some other things.</li> \
        <li>Answer a few background questions about yourself.</li> \
    </ol> \
    <p><b>Payment is performance-based.</b> You get $0.30 regardless of performance, plus a bonus for each correct answer up to a maximum of $1.50.\
    <p><b>PLEASE DO NOT ACCEPT THIS HIT</b> if you have completed another HIT involving categorizing math problems for Percepts Concepts. If you have, you will not be able to complete the HIT.</p> \
    <p><b>DO NOT USE THE FORWARD, BACKWARD, OR REFRESH BUTTONS</b> on your browser while working on the HIT - if you do, all your work will be lost. Also, please make sure your browser has Javascript enabled - otherwise, the HIT will not work.</p>";

var entrance_nonturk = "<p>Thank you for participating in this study!</p><p><b>DO NOT USE THE FORWARD, BACKWARD, OR REFRESH BUTTONS</b> on your browser while working on this study - if you do, all your work will be lost.</p>";

var nextpage_button = '<p><input id="nextPageButton" type="button" name="nextPageButton"></p> ';
entrance_turk += nextpage_button;
entrance_nonturk += nextpage_button;

// ineligible_turk
// Turk participants see this if their worker id is in an excluded table

var ineligible_turk = "Unfortunately, you are not eligible for this HIT because you have participated in another HIT for this Requester involving a closely-related topic.  If you believe this message is in error, please contact the Requester by email at percepts.concepts+mt@gmail.com.  We apologize for the inconvenience.";

// consent_form
// Turk participants see this and must "sign" it to do the experiment
// revise it as necessary e.g. if a new consent form is available
// modify the payment amount in the form appropriately

var consent_form = '\
<p style="text-align: center;">\
 <strong>INDIANA UNIVERSITY INFORMED CONSENT STATEMENT</strong></p>\
<p style="text-align: center;">\
 <strong>Learning About Science</strong></p>\
<p style="text-align: center;">\
 <span style="font-size:11px;">IRB Study #05-9550</span></p>\
<p style="text-align: center;">\
 <span style="font-size:11px;">Form date: March 17, 2012</span></p>\
<p style="text-align: center;">\
 <span style="font-size:11px;"><strong>IRB Approval Date: </strong>Mar 21, 2012</span></p>\
<p style="text-align: center;">\
 <span style="font-size:11px;"><strong>Expiration Date: </strong>DEC 6, 2012</span></p>\
<p>\
 You are invited to participate in a research study of how people learn scientific principles. You were selected as a possible subject because you indicated that you wished to participate on this website. We ask that you read this form and ask any questions you may have before agreeing to be in the study.</p>\
<p>\
 The study is being conducted by Dr. Robert Goldstone in the Department of Psychological and Brain Sciences.</p>\
<p>\
 <strong>STUDY PURPOSE: </strong>Science education is vital for developing general critical thinking skills and preparation for a wide variety of careers. However, many students have great difficulty acquiring scientific knowledge, and have particular difficulty applying their knowledge to new cases. The purpose of this study is to better understand how people acquire scientific knowledge and use it in new situations.</p>\
<p>\
 <strong>NUMBER OF PEOPLE TAKING PART IN THE STUDY: </strong>If you agree to participate, you will be one of approximately 6,000 subjects who will be participating in this research.</p>\
<p>\
 <strong>PROCEDURES FOR THE STUDY: </strong>If you agree to be in the study, you will be presented with several straightforward tasks to complete. These tasks will include interacting with graphical simulations of physical systems, and reading and entering text information. Each task will be related to a meaningful scientific principle. The entire session should take approximately 55 minutes. You may only participate in the experiment once.</p>\
<p>\
 <strong>RISKS OF TAKING PART IN THE STUDY: </strong>There is the risk of loss of confidentiality.</p>\
<p>\
 <strong>BENEFITS OF TAKING PART IN THE STUDY: </strong>An understanding of how individuals learn scientific principles can help us understand human learning, memory, and reasoning, and help educators to convey scientific information more effectively. You benefit from this experience because you learn something about how an experiment is designed and conducted, what issues are of interest to cognitive scientists, and how the mind acquires and uses scientific knowledge.</p>\
<p>\
 <strong>ALTERNATIVES TO TAKING PART IN THE STUDY: </strong>Instead of being in the study, you have these options: Not being in the study.</p>\
<p>\
 <strong>CONFIDENTIALITY</strong>: Efforts will be made to keep your personal information confidential. We cannot guarantee absolute confidentiality. Your personal information may be disclosed if required by law. Your identity will be held in confidence in reports in which the study may be published and in databases in which results may be stored.</p><p>Organizations that may inspect and/or copy your research records for quality assurance and data analysis include groups such as the study investigator and his/her research associates, the IUB Institutional Review Board or its designees, and (as allowed by law) state or federal agencies, specifically the Office for Human Research Protections (OHRP).</p>\
<p>\
 <strong>PAYMENT: </strong>For participating in this study, you will receive a small payment of $0.30.<br></p>\
<p>\
 <strong>CONTACTS FOR QUESTIONS OR PROBLEMS: </strong>For questions about the study or a research-related injury, contact the researcher Dr. Robert Goldstone at 812-855-4853, or rgoldsto@indiana.edu.</p>\
<p>\
 For questions about your rights as a research participant or to discuss problems, complaints or concerns about a research study, or to obtain information, or offer input, contact the IUB Human Subjects office at (812) 856-4242 or by email at irb@iu.edu.</p>\
<p>\
 <strong>VOLUNTARY NATURE OF STUDY: </strong>Taking part in this study is voluntary. You may choose not to take part or may leave the study at any time. Leaving the study will not result in any penalty or loss of benefits to which you are entitled. Your decision whether or not to participate in this study will not affect your current or future relations with the investigator(s).</p>\
<p>\
 <strong>SUBJECT\'S CONSENT </strong></p>\
<p>\
 By checking below, you acknowledge that you have read and understood the above information, that you are 18 years of age, or older and give your consent to participate in our internet-based study.</p>';

consent_form += ( '<p><input id="consentBox" name="consentBox" type="checkbox" value="consentGiven">I Agree to take part in this study.</p>' + nextpage_button );

// exit_turk, exit_nonturk, debriefing

// fill in the debriefing and change the other vars if needed
// do not delete or change the id of exit_form

var exit_turk = "<p>You have now completed the study. Thank you very much for your participation!</p><p><b>Your HIT has NOT yet been submitted.</b> To submit the HIT, click the button below. If you wish, you may read the text under the button, which explains what this study was about.</p>";

var exit_nonturk = "<p>You have now completed the study. Thank you very much for your participation!</p><p>The following paragraphs explain the background and purpose of this study. You are not required to read them if you do not want to.</p>";

exit_turk += '<form id="exit_form" method="POST"><p><input type="hidden" id="assignmentId" name="assignmentId" value=""><input id="mTurkSubmitButton" type="submit" name="Submit" value="Submit"></p></form>';

var debriefing  = '<p>The experiment in which you just participated explores how the way educational materials are presented affects how well students can learn from and remember them.</p><p>Modern educational materials increasingly take advantage of technology to become more interactive.  For example, instead of seeing static graphs in a textbook, you might see dynamic graphs on a computer that you can control yourself.  However, it is uncertain whether such technological innovations result in better learning.  While interactive technology might be highly motivating to students, it can also limit how much information students can see at one time and how well they can understand it.</p><p>The present experiment tested the specific idea that static graphs are preferable to dynamic graphs for educational purposes, because they allow students more easily to notice the similarities and differences among the graphs. You learned about two data patterns using either static graphs that were visible simultaneously or a dynamic graph that changed in response to sliders. The same set of graphs could be accessed in either condition, but in the dynamic condition, only one graph was visible at a time. We predict better performance on test questions from students who saw the static graph than the dynamic graph.</p><p>Technological innovation presents great opportunities for improving education, but controlled scientific study is crucial to understand which new technologies are actually beneficial.  Our work aims to contribute to that more general goal. We greatly appreciate your help in this research, which would not be possible without your effort. If you have any questions, or would like a more complete debriefing, please contact David Braithwaite at dwbraith@indiana.edu.</p>';

exit_turk += debriefing;
exit_nonturk += debriefing;


//////////////////////////////////
// Images to be Preloaded
//////////////////////////////////

all_images = [
'binomial_example_1.png', 
'binomial_example_2.png', 
'binomial_example_3.png', 
'binomial_example_4.png', 
'binomial_example_5.png', 
'binomial_example_6.png', 
'binomial_solid_00.png', 
'binomial_solid_01.png', 
'binomial_solid_02.png', 
'binomial_solid_10.png', 
'binomial_solid_11.png', 
'binomial_solid_12.png', 
'binomial_solid_20.png', 
'binomial_solid_21.png', 
'binomial_solid_22.png', 
'binomial_solid_full_00.png', 
'binomial_solid_full_01.png', 
'binomial_solid_full_02.png', 
'binomial_solid_full_10.png', 
'binomial_solid_full_11.png', 
'binomial_solid_full_12.png', 
'binomial_solid_full_20.png', 
'binomial_solid_full_21.png', 
'binomial_solid_full_22.png', 
'binomial_together_00.png', 
'binomial_together_01.png', 
'binomial_together_02.png', 
'binomial_together_10.png', 
'binomial_together_11.png', 
'binomial_together_12.png', 
'binomial_together_20.png', 
'binomial_together_21.png', 
'binomial_together_22.png', 
'binomial_transparent_00.png', 
'binomial_transparent_01.png', 
'binomial_transparent_02.png', 
'binomial_transparent_10.png', 
'binomial_transparent_11.png', 
'binomial_transparent_12.png', 
'binomial_transparent_20.png', 
'binomial_transparent_21.png', 
'binomial_transparent_22.png', 
'binomial_unlabeled_00.png', 
'binomial_unlabeled_01.png', 
'binomial_unlabeled_02.png', 
'binomial_unlabeled_10.png', 
'binomial_unlabeled_11.png', 
'binomial_unlabeled_12.png', 
'binomial_unlabeled_20.png', 
'binomial_unlabeled_21.png', 
'binomial_unlabeled_22.png', 
'coinflip.jpg',
'power_example_1.png', 
'power_example_2.png', 
'power_example_3.png', 
'power_example_4.png', 
'power_example_5.png', 
'power_example_6.png', 
'power_solid_00.png', 
'power_solid_01.png', 
'power_solid_02.png', 
'power_solid_10.png', 
'power_solid_11.png', 
'power_solid_12.png', 
'power_solid_20.png', 
'power_solid_21.png', 
'power_solid_22.png', 
'power_solid_full_00.png', 
'power_solid_full_01.png', 
'power_solid_full_02.png', 
'power_solid_full_10.png', 
'power_solid_full_11.png', 
'power_solid_full_12.png', 
'power_solid_full_20.png', 
'power_solid_full_21.png', 
'power_solid_full_22.png', 
'power_together_00.png', 
'power_together_01.png', 
'power_together_02.png', 
'power_together_10.png', 
'power_together_11.png', 
'power_together_12.png', 
'power_together_20.png', 
'power_together_21.png', 
'power_together_22.png', 
'power_transparent_00.png', 
'power_transparent_01.png', 
'power_transparent_02.png', 
'power_transparent_10.png', 
'power_transparent_11.png', 
'power_transparent_12.png', 
'power_transparent_20.png', 
'power_transparent_21.png', 
'power_transparent_22.png', 
'power_unlabeled_00.png', 
'power_unlabeled_01.png', 
'power_unlabeled_02.png', 
'power_unlabeled_10.png', 
'power_unlabeled_11.png', 
'power_unlabeled_12.png', 
'power_unlabeled_20.png', 
'power_unlabeled_21.png', 
'power_unlabeled_22.png', 
'scrambled_0_binomial_solid_full_00.png', 
'scrambled_0_binomial_solid_full_01.png', 
'scrambled_0_binomial_solid_full_02.png', 
'scrambled_0_binomial_solid_full_10.png', 
'scrambled_0_binomial_solid_full_11.png', 
'scrambled_0_binomial_solid_full_12.png', 
'scrambled_0_binomial_solid_full_20.png', 
'scrambled_0_binomial_solid_full_21.png', 
'scrambled_0_binomial_solid_full_22.png', 
'scrambled_0_binomial_together_00.png', 
'scrambled_0_binomial_together_01.png', 
'scrambled_0_binomial_together_02.png', 
'scrambled_0_binomial_together_10.png', 
'scrambled_0_binomial_together_11.png', 
'scrambled_0_binomial_together_12.png', 
'scrambled_0_binomial_together_20.png', 
'scrambled_0_binomial_together_21.png', 
'scrambled_0_binomial_together_22.png', 
'scrambled_0_power_solid_full_00.png', 
'scrambled_0_power_solid_full_01.png', 
'scrambled_0_power_solid_full_02.png', 
'scrambled_0_power_solid_full_10.png', 
'scrambled_0_power_solid_full_11.png', 
'scrambled_0_power_solid_full_12.png', 
'scrambled_0_power_solid_full_20.png', 
'scrambled_0_power_solid_full_21.png', 
'scrambled_0_power_solid_full_22.png', 
'scrambled_0_power_together_00.png', 
'scrambled_0_power_together_01.png', 
'scrambled_0_power_together_02.png', 
'scrambled_0_power_together_10.png', 
'scrambled_0_power_together_11.png', 
'scrambled_0_power_together_12.png', 
'scrambled_0_power_together_20.png', 
'scrambled_0_power_together_21.png', 
'scrambled_0_power_together_22.png', 
'scrambled_1_binomial_solid_full_00.png', 
'scrambled_1_binomial_solid_full_01.png', 
'scrambled_1_binomial_solid_full_02.png', 
'scrambled_1_binomial_solid_full_10.png', 
'scrambled_1_binomial_solid_full_11.png', 
'scrambled_1_binomial_solid_full_12.png', 
'scrambled_1_binomial_solid_full_20.png', 
'scrambled_1_binomial_solid_full_21.png', 
'scrambled_1_binomial_solid_full_22.png', 
'scrambled_1_binomial_together_00.png', 
'scrambled_1_binomial_together_01.png', 
'scrambled_1_binomial_together_02.png', 
'scrambled_1_binomial_together_10.png', 
'scrambled_1_binomial_together_11.png', 
'scrambled_1_binomial_together_12.png', 
'scrambled_1_binomial_together_20.png', 
'scrambled_1_binomial_together_21.png', 
'scrambled_1_binomial_together_22.png', 
'scrambled_1_power_solid_full_00.png', 
'scrambled_1_power_solid_full_01.png', 
'scrambled_1_power_solid_full_02.png', 
'scrambled_1_power_solid_full_10.png', 
'scrambled_1_power_solid_full_11.png', 
'scrambled_1_power_solid_full_12.png', 
'scrambled_1_power_solid_full_20.png', 
'scrambled_1_power_solid_full_21.png', 
'scrambled_1_power_solid_full_22.png', 
'scrambled_1_power_together_00.png', 
'scrambled_1_power_together_01.png', 
'scrambled_1_power_together_02.png', 
'scrambled_1_power_together_10.png', 
'scrambled_1_power_together_11.png', 
'scrambled_1_power_together_12.png', 
'scrambled_1_power_together_20.png', 
'scrambled_1_power_together_21.png', 
'scrambled_1_power_together_22.png', 
'scrambled_2_binomial_solid_full_00.png', 
'scrambled_2_binomial_solid_full_01.png', 
'scrambled_2_binomial_solid_full_02.png', 
'scrambled_2_binomial_solid_full_10.png', 
'scrambled_2_binomial_solid_full_11.png', 
'scrambled_2_binomial_solid_full_12.png', 
'scrambled_2_binomial_solid_full_20.png', 
'scrambled_2_binomial_solid_full_21.png', 
'scrambled_2_binomial_solid_full_22.png', 
'scrambled_2_binomial_together_00.png', 
'scrambled_2_binomial_together_01.png', 
'scrambled_2_binomial_together_02.png', 
'scrambled_2_binomial_together_10.png', 
'scrambled_2_binomial_together_11.png', 
'scrambled_2_binomial_together_12.png', 
'scrambled_2_binomial_together_20.png', 
'scrambled_2_binomial_together_21.png', 
'scrambled_2_binomial_together_22.png', 
'scrambled_2_power_solid_full_00.png', 
'scrambled_2_power_solid_full_01.png', 
'scrambled_2_power_solid_full_02.png', 
'scrambled_2_power_solid_full_10.png', 
'scrambled_2_power_solid_full_11.png', 
'scrambled_2_power_solid_full_12.png', 
'scrambled_2_power_solid_full_20.png', 
'scrambled_2_power_solid_full_21.png', 
'scrambled_2_power_solid_full_22.png', 
'scrambled_2_power_together_00.png', 
'scrambled_2_power_together_01.png', 
'scrambled_2_power_together_02.png', 
'scrambled_2_power_together_10.png', 
'scrambled_2_power_together_11.png', 
'scrambled_2_power_together_12.png', 
'scrambled_2_power_together_20.png', 
'scrambled_2_power_together_21.png', 
'scrambled_2_power_together_22.png', 
'scrambled_3_binomial_solid_full_00.png', 
'scrambled_3_binomial_solid_full_01.png', 
'scrambled_3_binomial_solid_full_02.png', 
'scrambled_3_binomial_solid_full_10.png', 
'scrambled_3_binomial_solid_full_11.png', 
'scrambled_3_binomial_solid_full_12.png', 
'scrambled_3_binomial_solid_full_20.png', 
'scrambled_3_binomial_solid_full_21.png', 
'scrambled_3_binomial_solid_full_22.png', 
'scrambled_3_binomial_together_00.png', 
'scrambled_3_binomial_together_01.png', 
'scrambled_3_binomial_together_02.png', 
'scrambled_3_binomial_together_10.png', 
'scrambled_3_binomial_together_11.png', 
'scrambled_3_binomial_together_12.png', 
'scrambled_3_binomial_together_20.png', 
'scrambled_3_binomial_together_21.png', 
'scrambled_3_binomial_together_22.png', 
'scrambled_3_power_solid_full_00.png', 
'scrambled_3_power_solid_full_01.png', 
'scrambled_3_power_solid_full_02.png', 
'scrambled_3_power_solid_full_10.png', 
'scrambled_3_power_solid_full_11.png', 
'scrambled_3_power_solid_full_12.png', 
'scrambled_3_power_solid_full_20.png', 
'scrambled_3_power_solid_full_21.png', 
'scrambled_3_power_solid_full_22.png', 
'scrambled_3_power_together_00.png', 
'scrambled_3_power_together_01.png', 
'scrambled_3_power_together_02.png', 
'scrambled_3_power_together_10.png', 
'scrambled_3_power_together_11.png', 
'scrambled_3_power_together_12.png', 
'scrambled_3_power_together_20.png', 
'scrambled_3_power_together_21.png', 
'scrambled_3_power_together_22.png', 
'scrambled_4_binomial_solid_full_00.png', 
'scrambled_4_binomial_solid_full_01.png', 
'scrambled_4_binomial_solid_full_02.png', 
'scrambled_4_binomial_solid_full_10.png', 
'scrambled_4_binomial_solid_full_11.png', 
'scrambled_4_binomial_solid_full_12.png', 
'scrambled_4_binomial_solid_full_20.png', 
'scrambled_4_binomial_solid_full_21.png', 
'scrambled_4_binomial_solid_full_22.png', 
'scrambled_4_binomial_together_00.png', 
'scrambled_4_binomial_together_01.png', 
'scrambled_4_binomial_together_02.png', 
'scrambled_4_binomial_together_10.png', 
'scrambled_4_binomial_together_11.png', 
'scrambled_4_binomial_together_12.png', 
'scrambled_4_binomial_together_20.png', 
'scrambled_4_binomial_together_21.png', 
'scrambled_4_binomial_together_22.png', 
'scrambled_4_power_solid_full_00.png', 
'scrambled_4_power_solid_full_01.png', 
'scrambled_4_power_solid_full_02.png', 
'scrambled_4_power_solid_full_10.png', 
'scrambled_4_power_solid_full_11.png', 
'scrambled_4_power_solid_full_12.png', 
'scrambled_4_power_solid_full_20.png', 
'scrambled_4_power_solid_full_21.png', 
'scrambled_4_power_solid_full_22.png', 
'scrambled_4_power_together_00.png', 
'scrambled_4_power_together_01.png', 
'scrambled_4_power_together_02.png', 
'scrambled_4_power_together_10.png', 
'scrambled_4_power_together_11.png', 
'scrambled_4_power_together_12.png', 
'scrambled_4_power_together_20.png', 
'scrambled_4_power_together_21.png', 
'scrambled_4_power_together_22.png', 
'scrambled_5_binomial_solid_full_00.png', 
'scrambled_5_binomial_solid_full_01.png', 
'scrambled_5_binomial_solid_full_02.png', 
'scrambled_5_binomial_solid_full_10.png', 
'scrambled_5_binomial_solid_full_11.png', 
'scrambled_5_binomial_solid_full_12.png', 
'scrambled_5_binomial_solid_full_20.png', 
'scrambled_5_binomial_solid_full_21.png', 
'scrambled_5_binomial_solid_full_22.png', 
'scrambled_5_binomial_together_00.png', 
'scrambled_5_binomial_together_01.png', 
'scrambled_5_binomial_together_02.png', 
'scrambled_5_binomial_together_10.png', 
'scrambled_5_binomial_together_11.png', 
'scrambled_5_binomial_together_12.png', 
'scrambled_5_binomial_together_20.png', 
'scrambled_5_binomial_together_21.png', 
'scrambled_5_binomial_together_22.png', 
'scrambled_5_power_solid_full_00.png', 
'scrambled_5_power_solid_full_01.png', 
'scrambled_5_power_solid_full_02.png', 
'scrambled_5_power_solid_full_10.png', 
'scrambled_5_power_solid_full_11.png', 
'scrambled_5_power_solid_full_12.png', 
'scrambled_5_power_solid_full_20.png', 
'scrambled_5_power_solid_full_21.png', 
'scrambled_5_power_solid_full_22.png', 
'scrambled_5_power_together_00.png', 
'scrambled_5_power_together_01.png', 
'scrambled_5_power_together_02.png', 
'scrambled_5_power_together_10.png', 
'scrambled_5_power_together_11.png', 
'scrambled_5_power_together_12.png', 
'scrambled_5_power_together_20.png', 
'scrambled_5_power_together_21.png', 
'scrambled_5_power_together_22.png', 
'scrambled_6_binomial_solid_full_00.png', 
'scrambled_6_binomial_solid_full_01.png', 
'scrambled_6_binomial_solid_full_02.png', 
'scrambled_6_binomial_solid_full_10.png', 
'scrambled_6_binomial_solid_full_11.png', 
'scrambled_6_binomial_solid_full_12.png', 
'scrambled_6_binomial_solid_full_20.png', 
'scrambled_6_binomial_solid_full_21.png', 
'scrambled_6_binomial_solid_full_22.png', 
'scrambled_6_binomial_together_00.png', 
'scrambled_6_binomial_together_01.png', 
'scrambled_6_binomial_together_02.png', 
'scrambled_6_binomial_together_10.png', 
'scrambled_6_binomial_together_11.png', 
'scrambled_6_binomial_together_12.png', 
'scrambled_6_binomial_together_20.png', 
'scrambled_6_binomial_together_21.png', 
'scrambled_6_binomial_together_22.png', 
'scrambled_6_power_solid_full_00.png', 
'scrambled_6_power_solid_full_01.png', 
'scrambled_6_power_solid_full_02.png', 
'scrambled_6_power_solid_full_10.png', 
'scrambled_6_power_solid_full_11.png', 
'scrambled_6_power_solid_full_12.png', 
'scrambled_6_power_solid_full_20.png', 
'scrambled_6_power_solid_full_21.png', 
'scrambled_6_power_solid_full_22.png', 
'scrambled_6_power_together_00.png', 
'scrambled_6_power_together_01.png', 
'scrambled_6_power_together_02.png', 
'scrambled_6_power_together_10.png', 
'scrambled_6_power_together_11.png', 
'scrambled_6_power_together_12.png', 
'scrambled_6_power_together_20.png', 
'scrambled_6_power_together_21.png', 
'scrambled_6_power_together_22.png', 
'scrambled_7_binomial_solid_full_00.png', 
'scrambled_7_binomial_solid_full_01.png', 
'scrambled_7_binomial_solid_full_02.png', 
'scrambled_7_binomial_solid_full_10.png', 
'scrambled_7_binomial_solid_full_11.png', 
'scrambled_7_binomial_solid_full_12.png', 
'scrambled_7_binomial_solid_full_20.png', 
'scrambled_7_binomial_solid_full_21.png', 
'scrambled_7_binomial_solid_full_22.png', 
'scrambled_7_binomial_together_00.png', 
'scrambled_7_binomial_together_01.png', 
'scrambled_7_binomial_together_02.png', 
'scrambled_7_binomial_together_10.png', 
'scrambled_7_binomial_together_11.png', 
'scrambled_7_binomial_together_12.png', 
'scrambled_7_binomial_together_20.png', 
'scrambled_7_binomial_together_21.png', 
'scrambled_7_binomial_together_22.png', 
'scrambled_7_power_solid_full_00.png', 
'scrambled_7_power_solid_full_01.png', 
'scrambled_7_power_solid_full_02.png', 
'scrambled_7_power_solid_full_10.png', 
'scrambled_7_power_solid_full_11.png', 
'scrambled_7_power_solid_full_12.png', 
'scrambled_7_power_solid_full_20.png', 
'scrambled_7_power_solid_full_21.png', 
'scrambled_7_power_solid_full_22.png', 
'scrambled_7_power_together_00.png', 
'scrambled_7_power_together_01.png', 
'scrambled_7_power_together_02.png', 
'scrambled_7_power_together_10.png', 
'scrambled_7_power_together_11.png', 
'scrambled_7_power_together_12.png', 
'scrambled_7_power_together_20.png', 
'scrambled_7_power_together_21.png', 
'scrambled_7_power_together_22.png', 
'scrambled_8_binomial_solid_full_00.png', 
'scrambled_8_binomial_solid_full_01.png', 
'scrambled_8_binomial_solid_full_02.png', 
'scrambled_8_binomial_solid_full_10.png', 
'scrambled_8_binomial_solid_full_11.png', 
'scrambled_8_binomial_solid_full_12.png', 
'scrambled_8_binomial_solid_full_20.png', 
'scrambled_8_binomial_solid_full_21.png', 
'scrambled_8_binomial_solid_full_22.png', 
'scrambled_8_binomial_together_00.png', 
'scrambled_8_binomial_together_01.png', 
'scrambled_8_binomial_together_02.png', 
'scrambled_8_binomial_together_10.png', 
'scrambled_8_binomial_together_11.png', 
'scrambled_8_binomial_together_12.png', 
'scrambled_8_binomial_together_20.png', 
'scrambled_8_binomial_together_21.png', 
'scrambled_8_binomial_together_22.png', 
'scrambled_8_power_solid_full_00.png', 
'scrambled_8_power_solid_full_01.png', 
'scrambled_8_power_solid_full_02.png', 
'scrambled_8_power_solid_full_10.png', 
'scrambled_8_power_solid_full_11.png', 
'scrambled_8_power_solid_full_12.png', 
'scrambled_8_power_solid_full_20.png', 
'scrambled_8_power_solid_full_21.png', 
'scrambled_8_power_solid_full_22.png', 
'scrambled_8_power_together_00.png', 
'scrambled_8_power_together_01.png', 
'scrambled_8_power_together_02.png', 
'scrambled_8_power_together_10.png', 
'scrambled_8_power_together_11.png', 
'scrambled_8_power_together_12.png', 
'scrambled_8_power_together_20.png', 
'scrambled_8_power_together_21.png', 
'scrambled_8_power_together_22.png', 
'scrambled_9_binomial_solid_full_00.png', 
'scrambled_9_binomial_solid_full_01.png', 
'scrambled_9_binomial_solid_full_02.png', 
'scrambled_9_binomial_solid_full_10.png', 
'scrambled_9_binomial_solid_full_11.png', 
'scrambled_9_binomial_solid_full_12.png', 
'scrambled_9_binomial_solid_full_20.png', 
'scrambled_9_binomial_solid_full_21.png', 
'scrambled_9_binomial_solid_full_22.png', 
'scrambled_9_binomial_together_00.png', 
'scrambled_9_binomial_together_01.png', 
'scrambled_9_binomial_together_02.png', 
'scrambled_9_binomial_together_10.png', 
'scrambled_9_binomial_together_11.png', 
'scrambled_9_binomial_together_12.png', 
'scrambled_9_binomial_together_20.png', 
'scrambled_9_binomial_together_21.png', 
'scrambled_9_binomial_together_22.png', 
'scrambled_9_power_solid_full_00.png', 
'scrambled_9_power_solid_full_01.png', 
'scrambled_9_power_solid_full_02.png', 
'scrambled_9_power_solid_full_10.png', 
'scrambled_9_power_solid_full_11.png', 
'scrambled_9_power_solid_full_12.png', 
'scrambled_9_power_solid_full_20.png', 
'scrambled_9_power_solid_full_21.png', 
'scrambled_9_power_solid_full_22.png', 
'scrambled_9_power_together_00.png', 
'scrambled_9_power_together_01.png', 
'scrambled_9_power_together_02.png', 
'scrambled_9_power_together_10.png', 
'scrambled_9_power_together_11.png', 
'scrambled_9_power_together_12.png', 
'scrambled_9_power_together_20.png', 
'scrambled_9_power_together_21.png', 
'scrambled_9_power_together_22.png', 
'small_blank.png', 
'smiley20face_thumbsup.jpg',
'whackamole.jpg'
].map( function(fn){return("stimuli/"+fn);} );
