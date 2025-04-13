var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'The NoteBook App' });
});


router.get('/notes', function(req, res, next) {
  res.render('notes', { title: 'My Notes'})
  
})


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Page' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Page' });
});

router.get('/reader', function(req, res, next) {
  res.render('reader', { title: 'Reading Page' });
});



router.post('/notes', function(req, res, next) {
  // Get form data
  const title = req.body.title;
  const content = req.body.content;
  
  // Here you would typically save this data to a database
  console.log('Received note:', title, content);
  
  // For now, just redirect back to the notes page
  // You might want to add a success message
  res.redirect('/notes');
});
module.exports = router;
