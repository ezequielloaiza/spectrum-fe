this.products = [
  {
    "code": "", "name": "Europa Multifocal",
    "priceBase": 165, "price1": 165, "price2": 130, "price3": 130, "price_d1": 185, "price_d2": 135, "price_d3": 135,
    "category": "Europa Scleral",
    "subCategory": "Europa",
    "material": "Contamac Extra or Extreme",
    "descriptionShort": "",
    "description": "The EUROPA SCLERAL contact lens is available in a 16.0 18.0 & 20.0mm diameter lens. EUROPA SCLERAL lenses rest on the sclera and completely vault the cornea allowing it to hold a fluid reservoir. It was uniquely designed so that it can successfully fit a wide variety of corneal and scleral geometries. Multiple fitting sets are not necessary to fit oblate and prolate corneas, as is often the case with other available scleral lens designs. The EUROPA SCLERAL contact lens is designed to manage mild to severe levels of corneal irregularity and ocular surface disease.",
    "replacementPeriod": "Yearly",
    "warranty": "90",
    "url": "http://spctinternational.com/scleral-contact-lenses/",
    "stock": 10,
    "types": [
      {
        "name": "M.F",
        "header": [
          { "name": "Contamac", "type":"selected", "values": [ "Extra", "Xtreme" ], "selected": null },
          { "name": "Hidrapeg", "type":"selected", "values": [ "Yes", "No" ], "selected": null },
          { "name": "Inserts (DMV)", "type":"selected", "values": [ "Yes", "No" ], "selected": null }
        ],
        "parameters": [
          { "name": "Diameter (mm)", "type": "selected", "values": ["16.0", "18.0", "20.0"], "selected": null },
          { "name": "Base Curve (d)", "type":"input", "values": ["any"], "placeholder":"e.g. 08.00", "selected": null },
          { "name": "Power", "type":"input", "values": ["any"],"placeholder":"e.g. 2.00", "selected": null },
          { "name": "Addition", "type": "selected", "values": ["1.00", "1.50", "2.00", "2.50", "3.00", "3.50"], "selected": null },
          { "name": "TPC Diopters", "type": "selected", "values": ["0.50", "1.00", "1.50", "2.00", "2.50", "3.00", "3.50", "4.00", "4.50", "5.00", "5.50", "6.00", "6.50", "7.00", "7.50", "8.00"], "selected": null },
          { "name": "TPC Meridian", "type": "selected", "values": [ "horizontal", "vertical"], "selected": null },
          { "name": "Notch (mm)", "type": "selected-double", "values": [
                                                                        { "name":"profundidad",
                                                                          "type":"input",
                                                                          "values":["any"],
                                                                          "placeholder":"depth",
                                                                          "selected":0
                                                                        },
                                                                        { "name":"longitud",
                                                                          "type":"input",
                                                                          "placeholder":"length",
                                                                          "values":["any"],
                                                                          "selected":0
                                                                        }
                                                                      ], "selected": null },
          { "name": "Thickness", "type": "input", "values": ["any"], "placeholder":"Ex. 0.40", "selected": 0 }
        ],
        "pasos": [
          { "name": "PC1",
            "values": [
              { "name": "1 Step (100 microns)",
                "values": [
                  { "name": "Steep", "type":"check", "selected": false },
                  { "name": "Flat", "type":"check", "selected": false }
                ]
              },
              { "name": "2 Step (200 microns)",
                "values": [
                  { "name": "Steep", "type":"check", "selected": false },
                  { "name": "Flat", "type":"check", "selected": false }
                ]
              }
            ]
          },
          { "name": "PC2",
            "values": [
              { "name": "1 Step (100 microns)",
                "values": [
                  { "name": "Steep", "type":"check", "selected": false },
                  { "name": "Flat", "type":"check", "selected": false }
                ]
              },
              { "name": "2 Step (200 microns)",
                "values": [
                  { "name": "Steep", "type":"check", "selected": false },
                  { "name": "Flat", "type":"check", "selected": false }
                ]
              }
            ]
          },
          { "name": "PC3",
            "values": [
              { "name": "1 Step (100 microns)",
                "values": [
                  { "name": "Steep", "type":"check", "selected": false },
                  { "name": "Flat", "type":"check", "selected": false }
                ]
              },
              { "name": "2 Step (200 microns)",
                "values": [
                  { "name": "Steep", "type":"check", "selected": false },
                  { "name": "Flat", "type":"check", "selected": false }
                ]
              }
            ]
          }
        ],
        "eyeLeft": null,
        "eyeRight": null
      }
    ],
    "infoAditional": [
      {
        "name": "Prices", "values": [
          { "title": "Hidrapeg", "values":[
                                            {"name": "Gold", "price": 25 },
                                            {"name": "Diamond", "price": 25 },
                                            {"name": "Preferred", "price": 25 }
                                          ]
          },
          { "title": "Inserts", "values":[
                                            {"name": "Gold", "price": 5 },
                                            {"name": "Diamond", "price": 5 },
                                            {"name": "Preferred", "price": 5 }
                                          ]
          },
          { "title": "Notch", "values":[
                                            {"name": "Gold", "price": 30 },
                                            {"name": "Diamond", "price": 20 },
                                            {"name": "Preferred", "price": 20 }
                                          ]
          },
          { "title": "Tickness", "values":[
                                            {"name": "Gold", "price": 30 },
                                            {"name": "Diamond", "price": 20 },
                                            {"name": "Preferred", "price": 20 }
                                          ]
          }
        ]
      }
    ]
  }
];
