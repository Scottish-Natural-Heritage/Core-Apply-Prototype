//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Run this code when a form is submitted to 'licence-required'
router.post('/licence-required-selection', function (req, res) {

    // Make a variable and give it the value from 'isLicenceRequired'
    var isLicenceRequired = req.session.data['isLicenceRequired']
  
    // Check whether the variable matches a condition
    if (isLicenceRequired == "Prevent serious damage"){
      // Send user to next page
      res.redirect('/before-you-start')
    } else if (isLicenceRequired == "Public health and safety") {
      // Send user to the other page
      res.redirect('/before-you-start')
    }else if (isLicenceRequired == "Air safety") {
      // Send user to the other page
      res.redirect('/before-you-start')
    }else if (isLicenceRequired == "Gulls public health and safety") {
      // Send user to the other page
      res.redirect('https://uat-licensing.nature.scot/gulls-health-and-safety/intro')
    }else if (isLicenceRequired == "Standard Forestry Operations") {
      // Send user to the other page
      res.redirect('https://uat-licensing.nature.scot/standard-forestry-operations/start')
    }else if (isLicenceRequired == "Trap registrations") {
      // Send user to the other page
      res.redirect('https://uat-licensing.nature.scot/trap-registration/start')
    }
  
  })

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

  // Run this code when a form is submitted to 'site-address'
router.post('/site-address-answer', function (req, res) {

  // Make a variable and give it the value from 'isSiteAddress'
  var isSiteAddress = req.session.data['isSiteAddress']

  // Check whether the variable matches a condition
  if (isSiteAddress == "yes"){
    // Send user to next page
    res.redirect('/species-selection')
  } else if (isSiteAddress == "no") {
    // Send user to the other page
    res.redirect('/site-postcode')
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
    res.redirect('/sub-species-selection')
  }else if (speciesSelection == "badgers") {
    // Send user to the other page
    res.redirect('/activities')
  }else if (speciesSelection == "hares") {
    // Send user to the other page
    res.redirect('/sub-species-selection')
  }else if (speciesSelection == "beavers") {
    // Send user to the other page
    res.redirect('/activities')
  }else if (speciesSelection == "pine martens") {
    // Send user to the other page
    res.redirect('/number-of-species')
  }

})

  // Run this code when a form is submitted to 'sub-species-selection'
  router.post('/sub-species-selection-answer', function (req, res) {

    // Make a variable and give it the value from 'subSpeciesSelect'
    var subSpeciesSelect = req.session.data['speciesSelection']
  
    // Check whether the variable matches a condition
    if (subSpeciesSelect == "ravens"){
      // Send user to next page
      res.redirect('/number-of-species')
    } else if (subSpeciesSelect == "geese") {
      // Send user to the other page
      res.redirect('/number-of-species')
    }else if (subSpeciesSelect == "gulls") {
      // Send user to the other page
      res.redirect('/number-of-species')
    }else if (subSpeciesSelect == "fish-eating birds") {
      // Send user to the other page
      res.redirect('/number-of-species')
    }else if (subSpeciesSelect == "other birds") {
      // Send user to the other page
      res.redirect('/activities-greylag-goose')
    }else if (subSpeciesSelect == "badgers") {
      // Send user to the other page
      res.redirect('/activities')
    }else if (subSpeciesSelect == "hares") {
      // Send user to the other page
      res.redirect('/number-of-species')
    }else if (subSpeciesSelect == "beavers") {
      // Send user to the other page
      res.redirect('/activities')
    }else if (subSpeciesSelect == "pine martens") {
      // Send user to the other page
      res.redirect('/number-of-species')
    }

  })

  // Run this code when a form is submitted to 'type-of-damage'
  router.post('/type-of-damage-answer', function (req, res) {

    // Make a variable and give it the value from 'typeOfDamage'
    var typeOfDamage = req.session.data['speciesSelection']
    var locationOfDamage = req.session.data['damage-type']
  
    // Check whether the variable matches a condition
    if (typeOfDamage == "ravens" && locationOfDamage == "damage-to-livestock") {
      // Send user to next page
      res.redirect('/location-of-damage')
    } else if (typeOfDamage == "ravens" && locationOfDamage == "damage-to-foodstuffs") {
      // Send user to the other page
      res.redirect('/damage-occurring')
    } else if (typeOfDamage == "geese") {
      // Send user to the other page
      res.redirect('/damage-occurring')
    }else if (typeOfDamage == "gulls") {
      // Send user to the other page
      res.redirect('/location-of-damage')
    }else if (typeOfDamage == "fish-eating birds") {
      // Send user to the other page
      res.redirect('/location-of-damage')
    }else if (typeOfDamage == "other birds") {
      // Send user to the other page
      res.redirect('/location-of-damage')
    }else if (typeOfDamage == "badgers") {
      // Send user to the other page
      res.redirect('/location-of-damage')
    }else if (typeOfDamage == "hares") {
      // Send user to the other page
      res.redirect('/location-of-damage')
    }else if (typeOfDamage == "beavers") {
      // Send user to the other page
      res.redirect('/location-of-damage')
    }else if (typeOfDamage == "pine martens") {
      // Send user to the other page
      res.redirect('/location-of-damage')
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