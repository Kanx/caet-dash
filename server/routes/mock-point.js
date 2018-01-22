const express = require('express');
const router = express.Router();

// Mock data
var MockData = require('../data');

/***
 * List Settings
 */

// Get List by name
router.get('/web/lists/:config/:items', function (req, res, next) {
  const listSettings = req.params.config;
  const returnSingleItem = req.params.items.indexOf('items(') !== -1;
  const listName = listSettings.substring(listSettings.lastIndexOf("('") + 2, listSettings.lastIndexOf("')"));

  if(listSettings.indexOf('Documents') !== -1) {
    res.json({
      "d": {
        "results": [
          {
            "__metadata": {},
            "File": {
              __deferred: {}
            },
            FileLeafRef: "_Media",
            Folder: {
              __metadata: {
                id: "Web/Lists(guid'4f051237-a36d-4feb-9e17-04dd5f81c61e')/Items(2)/Folder",
                type: "SP.Folder",
                uri: "https://collab.rbsres01.net/teams/candidate-attraction-and-engagement-qe9j99bj/_api/Web/Lists(guid'4f051237-a36d-4feb-9e17-04dd5f81c61e')/Items(2)/Folder"
              },
              ServerRelativeUrl: "/teams/candidate-attraction-and-engagement-qe9j99bj/Shared Documents/_Media"
            },
            Title: "_Media"
          },
          {
            __metadata: {},
            File: {},
            FileLeafRef: "_Reporting",
            Folder: {},
            Title: "_Reporting"
          },
          {
            __metadata: {},
            File: {},
            FileLeafRef: "sitemap.xml",
            Folder: {},
            Title: "sitemap.xml"
          },
          {
            __metadata: {},
            File: {
              __metadata: {},
              ServerRelativeUrl: "/teams/candidate-attraction-and-engagement-qe9j99bj/Shared Documents/_Campaign/rbs.svg"
            },
            FileLeafRef: "rbs.svg",
            Folder: {},
            Title: 0
          }
        ]
      }
    })
  } else {
    if (returnSingleItem) {
      const singleItemId = req.params.items.substring(req.params.items.lastIndexOf("items(") + 6, req.params.items.lastIndexOf(")"));
      const returnData = MockData[listName].filter(function(item) {
        return item.ID == singleItemId;
      });

      if(returnData.length) {
        res.json({ 'd':  returnData[0]  });
      } else {
        res.sendStatus(502);
      }

    } else {
      // Return all data
      res.json({ 'd': { 'results': MockData[listName] } });
    }
  }
});

// Delete list item
router.delete('/web/lists/:config/:items', function (req, res, next) {
  var match = false;
  const listSettings = req.params.config;
  const listName = listSettings.substring(listSettings.lastIndexOf("('") + 2, listSettings.lastIndexOf("')"));
  const requestId = req.params.items.substring(req.params.items.lastIndexOf("items(") + 6, req.params.items.lastIndexOf(")"));
  for(var i = 0; i < MockData[listName].length; i++) {
    if (MockData[listName][i].ID == requestId) {
      MockData[listName].splice(i, 1);
      match = true;
      res.json({ID: requestId});
    }
  }
  if (!match) res.sendStatus(500);

});

// Create/Update list item
router.post('/web/lists/:config/:items', function (req, res, next) {
  if (req.header('X-HTTP-Method') === 'MERGE') {
    // UPDATE
    const listSettings = req.params.config;
    const listName = listSettings.substring(listSettings.lastIndexOf("('") + 2, listSettings.lastIndexOf("')"));
    const requestId = req.params.items.substring(req.params.items.lastIndexOf("items(") + 6, req.params.items.lastIndexOf(")"));
    MockData[listName][requestId - 1] = Object.assign(MockData[listName][requestId - 1], req.body);
    res.json(MockData[listName][requestId - 1]);
  } else {
    // CREATE
    const listSettings = req.params.config;
    const listName = listSettings.substring(listSettings.lastIndexOf("('") + 2, listSettings.lastIndexOf("')"));
    const idList = MockData[listName].map(function(item) { return item.ID}).sort(function(a, b) { return a < b});
    const nextID = (idList[0]) ? idList[0] + 1 : 1;
    MockData[listName].push(Object.assign(req.body, {ID: nextID}));
    res.json({d: [...MockData[listName]].pop()});
  }
});

// Get FormDigestRequest
router.post('/contextinfo', function (req, res, next) {
  res.set('Content-Type', 'text/xml');
  res.send("<?xml version=\"1.0\" encoding=\"utf-8\"?><d:GetContextWebInformation xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns:georss=\"http://www.georss.org/georss\" xmlns:gml=\"http://www.opengis.net/gml\" m:type=\"SP.ContextWebInformation\"><d:FormDigestTimeoutSeconds m:type=\"Edm.Int32\">1800</d:FormDigestTimeoutSeconds><d:FormDigestValue>0xDECF553468352CDDCC45D89A9934E3128F267D739CB7F9EDCCE4E383E03183F96E88EE2EFB8E600F41A44EFFA4F7ADC653128C7B9C49A1D4272F3B200AA3339E,03 Oct 2017 21:13:02 -0000</d:FormDigestValue><d:LibraryVersion>15.0.4719.1000</d:LibraryVersion><d:SiteFullUrl>https://collab.rbsres01.net/teams/candidate-attraction-and-engagement-qe9j99bj</d:SiteFullUrl><d:SupportedSchemaVersions m:type=\"Collection(Edm.String)\"><d:element>14.0.0.0</d:element><d:element>15.0.0.0</d:element></d:SupportedSchemaVersions><d:WebFullUrl>https://collab.rbsres01.net/teams/candidate-attraction-and-engagement-qe9j99bj/app-development</d:WebFullUrl></d:GetContextWebInformation>")
});

// Create new List
router.post("/SP.AppContextSite(@target)/web/lists", function (req, res, next) {
  res.sendStatus(200);
});

/*
  User endpoints
 */

router.get("/SP.UserProfiles.PeopleManager/GetMyProperties", function (req, res, next) {
  res.json({
    AccountName: "europa\\smitmbm",
    DirectReports: {},
    DisplayName: "Matt Smith",
    Email: "Matthew.a.Smith@rbs.co.uk",
    ExtendedManagers: {},
    ExtendedReports: {},
    IsFollowed: false,
    LatestPost: null,
    Peers: {},
    PersonalUrl: "https://mysite-intranet.rbsres01.net/personal/europa_smitmbm/",
    PictureUrl: "https://mysite-intranet.rbsres01.net:443/User%20Photos/Profile%20Pictures/europa_smitmbm_MThumb.jpg?t=63594342583",
    Title: null,
    UserProfileProperties: {},
    UserUrl: "https://mysite-intranet.rbsres01.net:443/Person.aspx?accountname=europa%5Csmitmbm"
  })
});



module.exports = router;
