//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Run this code when a form is submitted to 'licence-holder'
router.post('/licence-holder-answer', function (req, res) {

    // Make a variable and give it the value from 'isLicenceHolder'
    var isLicenceHolder = req.session.data['isLicenceHolder']
  
    // Check whether the variable matches a condition
    if (isLicenceHolder == "yes"){
      // Send user to next page
      res.redirect('/licence-holder-details')
    } else if (isLicenceHolder == "no") {
      // Send user to the other page
      res.redirect('/on-behalf-details')
    }
  
  })

  // Run this code when a form is submitted to 'species-selection'
router.post('/species-selection-answer', function (req, res) {

  // Make a variable and give it the value from 'speciesSelection'
  var speciesSelection = req.session.data['speciesSelection']

  // Check whether the variable matches a condition
  if (speciesSelection == "ravens"){
    // Send user to next page
    res.redirect('/number-of-species')
  } else if (speciesSelection == "geese") {
    // Send user to the other page
    res.redirect('/sub-species-selection')
  }else if (speciesSelection == "gulls") {
    // Send user to the other page
    res.redirect('/sub-species-selection')
  }else if (speciesSelection == "fish-eating birds") {
    // Send user to the other page
    res.redirect('/sub-species-selection')
  }else if (speciesSelection == "other birds") {
    // Send user to the other page
    res.redirect('/sub-species-selection-multi')
  }else if (speciesSelection == "badgers") {
    // Send user to the other page
    res.redirect('/number-of-species')
  }else if (speciesSelection == "hares") {
    // Send user to the other page
    res.redirect('/sub-species-selection')
  }else if (speciesSelection == "beavers") {
    // Send user to the other page
    res.redirect('/number-of-species')
  }else if (speciesSelection == "other animals") {
    // Send user to the other page
    res.redirect('/sub-species-selection-multi')
  }

})

// Run this code when a form is submitted to 'previous-licence'
router.post('/previous-licence-answer', function (req, res) {

  // Make a variable and give it the value from 'previousLicence'
  var previousLicence = req.session.data['previousLicence']

  // Check whether the variable matches a condition
  if (previousLicence == "yes"){
    // Send user to next page
    res.redirect('/previous-licence-number')
  } else if (previousLicence == "no") {
    // Send user to the other page
    res.redirect('/supporting-info')
  }

})