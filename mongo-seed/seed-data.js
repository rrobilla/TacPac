db.topics.save({
    topicName: 'Java',
    topicType: 'language',
    topicImg: 'java.png',
    topicDetails: [{
      _id: ObjectId(),
      variable: 'type variableName = value;  or  type variableName; (if you do not want to give it an initial value on declaration)',
      ifelse: 'if (statement that evals to true){ body of if statement };',
      forloop: 'for (int i = 0; i < j; i++){ body of for loop };',
      whileloop: 'while (statement that evals to true){ body of while loop };',
      deffunc: '[public|private] returnValue nameOfFunction(type variable) throws exceptionType { body of method };',
      topic_one_title: 'Basic Java Networking:',
      topic_one_url: 'https://docs.oracle.com/javase/tutorial/networking/overview/networking.html',
      topic_two_title: 'Creating a Binary Search Tree:',
      topic_two_url: 'https://dzone.com/articles/java-how-create-binary-search',
      doculinks_title: 'Documentation:',
      doculinks_url: 'https://docs.oracle.com/javase/8/docs/api/',
      otherlinks_title: 'TutorialsPoint - Java:',
      otherlinks_url: 'https://www.tutorialspoint.com/java/',
      sheet: '<img src=https://www.quicklycode.com/wp-content/images/java.jpg class=img-thumbnail>',
      download: 'https://www.quicklycode.com/wp-content/images/java.jpg'
    }]
});
db.topics.save({
    topicName: 'Python',
    topicType: 'language',
    topicImg: 'python.png',
    topicDetails: [{
      _id: ObjectId(),
      variable: 'variableName = value',
      ifelse: 'if (statement that evals to true):',
      forloop: 'for i in object:',
      whileloop: 'while (statement that evals to true):',
      deffunc: 'def functionName(variable):',
      topic_one_title: 'Python Socket Programming:',
      topic_one_url: 'https://docs.python.org/2/howto/sockets.html',
      topic_two_title: 'Web apps in python:',
      topic_two_url: '#',
      doculinks_title: 'Python3 Documentation:',
      doculinks_url: 'https://docs.python.org/3/',
      otherlinks_title: 'Panda3D - Game engine for python:',
      otherlinks_url: 'https://www.panda3d.org/',
      sheet: '<img src=http://sixthresearcher.com/wp-content/uploads/2016/12/Python3_reference_cheat_sheet_front.png class=img-thumbnail',
      download: 'http://sixthresearcher.com/wp-content/uploads/2016/12/Python3_reference_cheat_sheet_front.png'
    }]
});
db.topics.save({
    topicName: 'Javascript',
    topicType: 'language',
    topicImg: 'javascript.png',
    topicDetails: [{
      _id: ObjectId(),
      variable: '[var|const|let] variableName = value;',
      ifelse: 'if (statement that evals to true){ body of if statement };',
      forloop: 'for (int i = 0; i < j; i++){ body of for loop };',
      whileloop: 'while (statement that evals to true){ body of while loop };',
      deffunc: 'function functionName(variables){ function body };',
      topic_one_title: 'Javascript Networking:',
      topic_one_url: 'http://sourcedaddy.com/networking/javascript.html',
      topic_two_title: 'Using javascript to run your home:',
      topic_two_url: 'https://medium.com/@marassi/control-your-home-using-only-javascript-72a3b071c894',
      doculinks_title: 'Documentation:',
      doculinks_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
      otherlinks_title: 'Javascript - the future of enterprise app development:',
      otherlinks_url: 'https://www.logicroom.co/javascript-is-the-future-of-application-development/',
      sheet: '<img src=http://tintation.com/wp-content/uploads/help-cheat-sheets/java-syntax-cheat-sheet.jpg class=img-thumbnail>',
      download: 'http://tintation.com/wp-content/uploads/help-cheat-sheets/java-syntax-cheat-sheet.jpg'
    }]
});
db.topics.save({
    topicName: 'PHP',
    topicType: 'language',
    topicImg: 'php.png',
    topicDetails: [{
      _id: ObjectId(),
      variable: '$variableName = value;',
      ifelse: 'if (statement that evals to true){ body of if statement };',
      forloop: 'for ($i = 0; $i < j; $i++){ for loop body };',
      whileloop: 'while (statement that evals to true){ body of while loop };',
      deffunc: 'function functionName(variable){ body of function };',
      topic_one_title: 'PHP Networking tutorials:',
      topic_one_url: 'http://www.tutorialspoint.com/listtutorials/php/networking/1',
      topic_two_title: 'PHP MySQL Databse:',
      topic_two_url: 'https://www.w3schools.com/php/php_mysql_intro.asp',
      doculinks_title: 'Documentation:',
      doculinks_url: 'http://php.net/docs.php',
      otherlinks_title: 'Controlling your lights with PHP:',
      otherlinks_url: 'http://jafty.com/how-to-control-house-lights-from-anywhere/',
      sheet: '<img src=https://blueblots.com/wp-content/uploads/2011/10/12-emezeta-card-php-cheat-sheet.jpg class=img-thumbnail>',
      download: 'https://blueblots.com/wp-content/uploads/2011/10/12-emezeta-card-php-cheat-sheet.jpg'
    }]
});
db.mainpages.save({
    whatTitle: 'What is the TacPac?',
    whatBody: 'The TacPac is an easy to use collection of cheat sheets, quick reference guides, and resources for topics related to programming. The idea is to have commonly used resources for quick reference all in one location instead of having to search through the web. This is useful for novices who don\'t have this information in muscle memory, with a focus on increasing productivity and efficiency.',
    howTitle: 'How do you use it?',
    howBody: 'Using the TacPac is simple. To start, click the Topics link at the top of the page. When the various topics load, select one by clicking it. This will open up the page containing the various cheat sheets, links, etc. of that specific topic.',
    suggestTitle: 'Have any suggestions?',
    suggestBody: 'If you have any suggestions on things you would like to see or to provide feedback, please visit the Feedback/Contact page link at the top.'
});