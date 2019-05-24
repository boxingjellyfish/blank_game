class Data {

  static get Intro() {
    return [
      {
        "id": Random.UUID(),
        "components": {
          "Transform": {
            "name": "Transform",
            "position": { "x": -150, "y": 0 },
            "scale": { "x": 100, "y": 100 },
            "angle": 0
          },
          "Shape": {
            "name": "Shape",
            "color": { "h": 195, "s": 70, "l": 22, "a": 0 },
            "outlineColor": { "h": 195, "s": 70, "l": 0, "a": 0 },
            "outlineWidth": 5,
            "type": "Ellipse"
          },
          "Expiration": {
            "name": "Expiration",
            "duration": 3000,
            "elapsed": 0
          },
          "Animation": {
            "name": "Animation",
            "sequences": [
              {
                "keyframes": [0, 1000, 2000, 3000],
                "values": [0, 1, 1, 0],
                "component": "Shape",
                "path": "color",
                "property": "a",
                "keyframe": 0,
                "elapsed": 0,
                "easing": "EaseInOutQuad",
                "type": "Number",
                "loop": false,
                "playing": true
              },
              {
                "keyframes": [0, 1000, 2000, 3000],
                "values": [0, 1, 1, 0],
                "component": "Shape",
                "path": "outlineColor",
                "property": "a",
                "keyframe": 0,
                "elapsed": 0,
                "easing": "EaseInOutQuad",
                "type": "Number",
                "loop": false,
                "playing": true
              }
            ]
          }
        }
      },
      {
        "id": Random.UUID(),
        "components": {
          "Transform": {
            "name": "Transform",
            "position": { "x": 0, "y": 0 },
            "scale": { "x": 100, "y": 100 },
            "angle": 0
          },
          "Shape": {
            "name": "Shape",
            "color": { "h": 162, "s": 70, "l": 34, "a": 0 },
            "outlineColor": { "h": 162, "s": 70, "l": 0, "a": 0 },
            "outlineWidth": 5,
            "type": "Triangle"
          },
          "Expiration": {
            "name": "Expiration",
            "duration": 3500,
            "elapsed": 0
          },
          "Animation": {
            "name": "Animation",
            "sequences": [
              {
                "keyframes": [0, 500, 1500, 2500, 3500],
                "values": [0, 0, 1, 1, 0],
                "component": "Shape",
                "path": "color",
                "property": "a",
                "keyframe": 0,
                "elapsed": 0,
                "easing": "EaseInOutQuad",
                "type": "Number",
                "loop": false,
                "playing": true
              },
              {
                "keyframes": [0, 500, 1500, 2500, 3500],
                "values": [0, 0, 1, 1, 0],
                "component": "Shape",
                "path": "outlineColor",
                "property": "a",
                "keyframe": 0,
                "elapsed": 0,
                "easing": "EaseInOutQuad",
                "type": "Number",
                "loop": false,
                "playing": true
              }
            ]
          }
        }
      },
      {
        "id": Random.UUID(),
        "components": {
          "Transform": {
            "name": "Transform",
            "position": { "x": 150, "y": 0 },
            "scale": { "x": 100, "y": 100 },
            "angle": 0
          },
          "Shape": {
            "name": "Shape",
            "color": { "h": 133, "s": 47, "l": 68, "a": 0 },
            "outlineColor": { "h": 133, "s": 47, "l": 0, "a": 0 },
            "outlineWidth": 5,
            "type": "Rectagle"
          },
          "Expiration": {
            "name": "Expiration",
            "duration": 4000,
            "elapsed": 0
          },
          "Animation": {
            "name": "Animation",
            "sequences": [
              {
                "keyframes": [0, 1000, 2000, 3000, 4000],
                "values": [0, 0, 1, 1, 0],
                "component": "Shape",
                "path": "color",
                "property": "a",
                "keyframe": 0,
                "elapsed": 0,
                "easing": "EaseInOutQuad",
                "type": "Number",
                "loop": false,
                "playing": true
              },
              {
                "keyframes": [0, 1000, 2000, 3000, 4000],
                "values": [0, 0, 1, 1, 0],
                "component": "Shape",
                "path": "outlineColor",
                "property": "a",
                "keyframe": 0,
                "elapsed": 0,
                "easing": "EaseInOutQuad",
                "type": "Number",
                "loop": false,
                "playing": true
              }
            ]
          }
        }
      }
    ];
  }

  static get ballWallCollision() {
    return {
      "id": Random.UUID(),
      "position": {
        "x": 0,
        "y": 0
      },
      "velocity": {
        "x": 0,
        "y": 0
      },
      "spread": Math.PI / 2,
      "velocityRandomness": 1.5,
      "size": 10,
      "color": {
        "h": 0,
        "s": 100,
        "l": 100,
        "a": 1
      },
      "colorEnd": {
        "h": 0,
        "s": 100,
        "l": 100,
        "a": 1
      },
      "lifespan": 100,
      "emissionRate": 0.1,
      "particleSize": 3,
      "particleSizeRandomness": 1.5,
      "maxParticles": 100,
      "particleLifespan": 300,
      "particleLifespanRandomness": 1.5,
      "enabled": true,
      "emissionTimer": 0,
      "foreground": true,
      "fields": [],
      "particles": []
    };
  }

  static get boxWithWallCollisionParticles() {
    return {
      "id": Random.UUID(),
      "position": {
        "x": 0,
        "y": 0
      },
      "velocity": {
        "x": 0,
        "y": 0
      },
      "spread": Math.PI / 2,
      "velocityRandomness": 1.5,
      "size": 10,
      "color": {
        "h": 0,
        "s": 0,
        "l": 0,
        "a": 0
      },
      "colorEnd": {
        "h": 0,
        "s": 0,
        "l": 0,
        "a": 0
      },
      "lifespan": 100,
      "emissionRate": 0.1,
      "particleSize": 3,
      "particleSizeRandomness": 1.5,
      "maxParticles": 100,
      "particleLifespan": 300,
      "particleLifespanRandomness": 1.5,
      "enabled": true,
      "emissionTimer": 0,
      "foreground": true,
      "fields": [],
      "particles": []
    };
  }

  static get boxWithBoxCollisionParticles() {
    return {
      "id": Random.UUID(),
      "position": {
        "x": 0,
        "y": 0
      },
      "velocity": {
        "x": 0,
        "y": 0
      },
      "spread": Math.PI,
      "velocityRandomness": 1.5,
      "size": 2,
      "color": {
        "h": 0,
        "s": 0,
        "l": 0,
        "a": 0
      },
      "colorEnd": {
        "h": 0,
        "s": 0,
        "l": 0,
        "a": 0
      },
      "lifespan": 100,
      "emissionRate": 0.7,
      "particleSize": 3,
      "particleSizeRandomness": 1.5,
      "maxParticles": 50,
      "particleLifespan": 500,
      "particleLifespanRandomness": 1.5,
      "enabled": true,
      "emissionTimer": 0,
      "foreground": true,
      "fields": [],
      "particles": []
    };
  }

  static get boxDestructionParticles() {
    return {
      "id": Random.UUID(),
      "position": {
        "x": 0,
        "y": 0
      },
      "velocity": {
        "x": 2,
        "y": 2
      },
      "spread": Math.PI,
      "velocityRandomness": 1.5,
      "size": 2,
      "color": {
        "h": 0,
        "s": 0,
        "l": 0,
        "a": 0
      },
      "colorEnd": {
        "h": 0,
        "s": 0,
        "l": 0,
        "a": 0
      },
      "lifespan": 500,
      "emissionRate": 0.1,
      "particleSize": 4,
      "particleSizeRandomness": 3,
      "maxParticles": 50,
      "particleLifespan": 500,
      "particleLifespanRandomness": 1.5,
      "enabled": true,
      "emissionTimer": 0,
      "foreground": true,
      "fields": [],
      "particles": []
    };
  }

  static get boxTrailParticles() {
    return {
      "id": Random.UUID(),
      "position": {
        "x": 0,
        "y": 0
      },
      "velocity": {
        "x": 0,
        "y": 0
      },
      "spread": Math.PI / 8,
      "velocityRandomness": 1.5,
      "size": 0,
      "color": {
        "h": 0,
        "s": 0,
        "l": 0,
        "a": 0
      },
      "colorEnd": {
        "h": 0,
        "s": 0,
        "l": 0,
        "a": 0
      },
      "lifespan": null,
      "emissionRate": 0.04,
      "particleSize": 3,
      "particleSizeRandomness": 1,
      "maxParticles": 100,
      "particleLifespan": 600,
      "particleLifespanRandomness": 1.5,
      "enabled": true,
      "emissionTimer": 0,
      "foreground": false,
      "fields": [],
      "particles": []
    };
  }

  static get background() {
    return {
      "id": Random.UUID(),
      "position": {
        "x": 0,
        "y": 432
      },
      "velocity": {
        "x": 0.7,
        "y": 0
      },
      "spread": 0.1308996938995747,
      "velocityRandomness": 1.5,
      "size": 864,
      "color": {
        "h": 0,
        "s": 100,
        "l": 50,
        "a": 0.5
      },
      "colorEnd": {
        "h": 360,
        "s": 100,
        "l": 50,
        "a": 0.5
      },
      "lifespan": null,
      "emissionRate": 0.05,
      "particleSize": 3,
      "particleSizeRandomness": 2,
      "maxParticles": 1000,
      "particleLifespan": 30000,
      "particleLifespanRandomness": 1.5,
      "enabled": true,
      "emissionTimer": 0,
      "foreground": false,
      "fields": [
        {
          "id": Random.UUID(),
          "position": {
            "x": 0,
            "y": 0
          },
          "mass": -15,
          "destructive": false,
          "radius": 15,
          "enabled": true,
          "visible": true
        }
      ],
      "particles": [
        {
          "position": {
            "x": 2383.325498105831,
            "y": -207.20722717207963
          },
          "velocity": {
            "x": 0.9003874190048942,
            "y": 0.06053359111792187
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 357.4611748818306,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 313.33333333407506,
          "totalLifespan": 44430
        },
        {
          "position": {
            "x": 2136.355469809163,
            "y": -310.81624625902015
          },
          "velocity": {
            "x": 0.8126114377365019,
            "y": 0.015898415578874087
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 355.5665757500561,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 546.3333333340655,
          "totalLifespan": 44363
        },
        {
          "position": {
            "x": 1825.6915874910103,
            "y": 481.46542410923485
          },
          "velocity": {
            "x": 0.7016493418489957,
            "y": -0.0863071090530958
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 357.0415770937147,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 359.33333333397366,
          "totalLifespan": 43726
        },
        {
          "position": {
            "x": 2050.7734890072775,
            "y": -431.5793534041613
          },
          "velocity": {
            "x": 0.7890625198180968,
            "y": -0.018884758632140206
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 347.20459555139286,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1596.333333334147,
          "totalLifespan": 44913
        },
        {
          "position": {
            "x": 2617.1440622738296,
            "y": 173.83857971525708
          },
          "velocity": {
            "x": 1.0104803329242795,
            "y": -0.016371375602259472
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 345.9483526268857,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1753.3333333341498,
          "totalLifespan": 44920
        },
        {
          "position": {
            "x": 1856.101715832521,
            "y": 640.4776586221054
          },
          "velocity": {
            "x": 0.7224996947576777,
            "y": -0.09063289101352158
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 357.31837359172425,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 321.33333333388794,
          "totalLifespan": 43138
        },
        {
          "position": {
            "x": 2348.7078639537694,
            "y": -659.7903111952651
          },
          "velocity": {
            "x": 0.9196193672489327,
            "y": -0.10939361437347477
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 358.22988989409777,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 210.33333333383533,
          "totalLifespan": 42777
        },
        {
          "position": {
            "x": 2108.584424821587,
            "y": 391.6963631836439
          },
          "velocity": {
            "x": 0.8265717071037078,
            "y": -0.03767791993024423
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 355.9038273729202,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 489.3333333338687,
          "totalLifespan": 43006
        },
        {
          "position": {
            "x": 1818.052747320274,
            "y": 132.21440020457376
          },
          "velocity": {
            "x": 0.7143625726209001,
            "y": -0.03826948701256423
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 352.59074535882036,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 891.3333333339115,
          "totalLifespan": 43308
        },
        {
          "position": {
            "x": 2456.780800699426,
            "y": -326.96451376939274
          },
          "velocity": {
            "x": 0.9710596050195834,
            "y": 0.007312607047230342
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 341.13892759224524,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2331.333333334086,
          "totalLifespan": 44498
        },
        {
          "position": {
            "x": 1755.8181596062873,
            "y": -503.3945539547499
          },
          "velocity": {
            "x": 0.7006457141286415,
            "y": -0.08736224266747587
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 351.7686692869133,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 977.3333333338297,
          "totalLifespan": 42744
        },
        {
          "position": {
            "x": 1770.1792284529765,
            "y": 856.1020357655161
          },
          "velocity": {
            "x": 0.7072230237526496,
            "y": 0.07590769787528438
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 343.08036734133884,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2057.333333333984,
          "totalLifespan": 43774
        },
        {
          "position": {
            "x": 1762.2373255376533,
            "y": 886.3598752257906
          },
          "velocity": {
            "x": 0.7065907480102949,
            "y": 0.08298039734576967
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 344.681439167084,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1847.3333333339299,
          "totalLifespan": 43414
        },
        {
          "position": {
            "x": 1929.2646996633162,
            "y": -350.69680544601795
          },
          "velocity": {
            "x": 0.7773024575597952,
            "y": -0.00636422127346787
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 336.50434979097827,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2888.3333333340465,
          "totalLifespan": 44255
        },
        {
          "position": {
            "x": 1804.2247290893615,
            "y": 1121.0749582211354
          },
          "velocity": {
            "x": 0.7286852702299047,
            "y": 0.08694503560942743
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 331.34827701571794,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3568.333333334125,
          "totalLifespan": 44835
        },
        {
          "position": {
            "x": 1896.5134272862167,
            "y": 420.5770510543213
          },
          "velocity": {
            "x": 0.7687529093174452,
            "y": 0.04496308140827579
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 339.44091544934935,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2490.3333333339556,
          "totalLifespan": 43607
        },
        {
          "position": {
            "x": 2212.5543542719397,
            "y": -144.0683233266263
          },
          "velocity": {
            "x": 0.9023468002740402,
            "y": -0.054583311946103434
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 332.2418192904348,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3414.3333333340447,
          "totalLifespan": 44281
        },
        {
          "position": {
            "x": 1761.903572520708,
            "y": 380.646517958544
          },
          "velocity": {
            "x": 0.7203203485366528,
            "y": -0.021353059675295633
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 336.03516966615774,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2907.3333333339615,
          "totalLifespan": 43674
        },
        {
          "position": {
            "x": 2414.096192992462,
            "y": 156.4157165485484
          },
          "velocity": {
            "x": 0.9881687241066034,
            "y": -0.0012937034192632465
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 359.1590708615094,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 95.33333333354923,
          "totalLifespan": 40812
        },
        {
          "position": {
            "x": 1716.053374045307,
            "y": -252.37297335401888
          },
          "velocity": {
            "x": 0.7050342539216373,
            "y": 0.05365287533956584
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 349.89697637644053,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1171.3333333336839,
          "totalLifespan": 41738
        },
        {
          "position": {
            "x": 2493.8012815100487,
            "y": 811.3941182711224
          },
          "velocity": {
            "x": 1.0283716624783554,
            "y": -0.09639765565688052
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 324.3785531155883,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 4438.333333334129,
          "totalLifespan": 44855
        },
        {
          "position": {
            "x": 2349.2319452804295,
            "y": 286.4376213299113
          },
          "velocity": {
            "x": 0.9699553861603775,
            "y": -0.017629854057466237
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 332.59332158468806,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3326.333333333961,
          "totalLifespan": 43693
        },
        {
          "position": {
            "x": 2152.7675677416564,
            "y": 553.5227578378241
          },
          "velocity": {
            "x": 0.9045241881267689,
            "y": 0.03546681583764201
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 336.25317886408203,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2801.333333333788,
          "totalLifespan": 42468
        },
        {
          "position": {
            "x": 1959.9785255887798,
            "y": -59.80213346976862
          },
          "velocity": {
            "x": 0.8256017378217598,
            "y": -0.04481395722745609
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 324.605182197301,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 4314.333333333984,
          "totalLifespan": 43881
        },
        {
          "position": {
            "x": 2108.627225968844,
            "y": 782.0263587135248
          },
          "velocity": {
            "x": 0.8893408797844139,
            "y": -0.11571036405656542
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 327.6143978997257,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3906.333333333916,
          "totalLifespan": 43423
        },
        {
          "position": {
            "x": 2194.697099044363,
            "y": 1312.5117533605705
          },
          "velocity": {
            "x": 0.9268146533126044,
            "y": 0.10174164837619061
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 338.535585789508,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2502.3333333337177,
          "totalLifespan": 41969
        },
        {
          "position": {
            "x": 2296.641759365772,
            "y": 156.57210809973662
          },
          "velocity": {
            "x": 0.9735658157549002,
            "y": -0.05268130675539191
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 317.4895134698576,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5264.333333334103,
          "totalLifespan": 44581
        },
        {
          "position": {
            "x": 1763.6404792042288,
            "y": 847.2929359068137
          },
          "velocity": {
            "x": 0.7485740573871548,
            "y": 0.02166417633147478
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 357.1951989892606,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 308.3333333333688,
          "totalLifespan": 39575
        },
        {
          "position": {
            "x": 1842.0026507996818,
            "y": -40.58748580702039
          },
          "velocity": {
            "x": 0.7858373083616736,
            "y": -0.07152874128606597
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 347.37076098500603,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1420.333333333503,
          "totalLifespan": 40487
        },
        {
          "position": {
            "x": 2376.5658046840463,
            "y": 453.24900295849335
          },
          "velocity": {
            "x": 1.0151925692797634,
            "y": 0.13192876547970067
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 321.3011254460557,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 4699.333333333967,
          "totalLifespan": 43716
        },
        {
          "position": {
            "x": 1629.6473493405683,
            "y": 780.6747656025539
          },
          "velocity": {
            "x": 0.6988196180705963,
            "y": -0.06677566669458578
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 326.5420429881636,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3982.333333333831,
          "totalLifespan": 42849
        },
        {
          "position": {
            "x": 1870.813834740609,
            "y": 117.2138715338416
          },
          "velocity": {
            "x": 0.8053438806459885,
            "y": -0.09656103688678154
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 358.11921891058637,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 203.3333333332743,
          "totalLifespan": 38920
        },
        {
          "position": {
            "x": 2076.7930562280308,
            "y": 586.048003378687
          },
          "velocity": {
            "x": 0.8963284662184177,
            "y": -0.02329661285018866
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 358.7335174051049,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 136.3333333332501,
          "totalLifespan": 38753
        },
        {
          "position": {
            "x": 1783.8179554861674,
            "y": 498.44082158767003
          },
          "velocity": {
            "x": 0.7708807067787825,
            "y": 0.04925522799716511
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 327.67694885652554,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3804.333333333764,
          "totalLifespan": 42371
        },
        {
          "position": {
            "x": 1757.5149774966824,
            "y": 708.6724818045398
          },
          "velocity": {
            "x": 0.761488291809642,
            "y": -0.06709458589075672
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 322.9854227405205,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 4408.33333333384,
          "totalLifespan": 42875
        },
        {
          "position": {
            "x": 2411.0485811312597,
            "y": 574.1084741431013
          },
          "velocity": {
            "x": 1.0460080612282814,
            "y": 0.046787490902709804
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 354.7154325579014,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 572.3333333332841,
          "totalLifespan": 38989
        },
        {
          "position": {
            "x": 1676.5880836587994,
            "y": 272.49703577123626
          },
          "velocity": {
            "x": 0.7283180207031958,
            "y": -0.08044317399210316
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 353.42886386898704,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 713.3333333332963,
          "totalLifespan": 39080
        },
        {
          "position": {
            "x": 2107.333843374827,
            "y": 645.9446846451278
          },
          "velocity": {
            "x": 0.9190291510575367,
            "y": 0.04022691954251194
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 343.90701162354617,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1788.3333333334344,
          "totalLifespan": 40005
        },
        {
          "position": {
            "x": 1855.7004377715298,
            "y": 967.7021649675796
          },
          "velocity": {
            "x": 0.8103495361448111,
            "y": 0.04238842930152709
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 358.69054456221096,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 139.3333333331846,
          "totalLifespan": 38306
        },
        {
          "position": {
            "x": 1771.1684051792276,
            "y": 118.254043146331
          },
          "velocity": {
            "x": 0.7754677780995087,
            "y": -0.021061761851330255
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 315.0851861218996,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5426.333333333949,
          "totalLifespan": 43493
        },
        {
          "position": {
            "x": 1847.3602338318121,
            "y": -591.1438175599809
          },
          "velocity": {
            "x": 0.8109570824546802,
            "y": -0.0968845696922091
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 335.6993736951966,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2748.3333333335318,
          "totalLifespan": 40715
        },
        {
          "position": {
            "x": 1920.36614802171,
            "y": 51.99540690335064
          },
          "velocity": {
            "x": 0.8441169881413886,
            "y": -0.05056536803103246
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 331.9391080200357,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3205.3333333335877,
          "totalLifespan": 41122
        },
        {
          "position": {
            "x": 2161.790747346336,
            "y": 241.30023120482983
          },
          "velocity": {
            "x": 0.9527504395532425,
            "y": 0.10864494531677836
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 355.19724483406526,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 511.333333333188,
          "totalLifespan": 38328
        },
        {
          "position": {
            "x": 1874.8353869714292,
            "y": 82.38396114309131
          },
          "velocity": {
            "x": 0.8273766050182441,
            "y": -0.019820584169765953
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 358.5443037974703,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 153.33333333312882,
          "totalLifespan": 37920
        },
        {
          "position": {
            "x": 1786.6381604627145,
            "y": 1239.5831217901748
          },
          "velocity": {
            "x": 0.7894998499614195,
            "y": 0.06956566904468825
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 335.5243649303139,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2751.333333333497,
          "totalLifespan": 40468
        },
        {
          "position": {
            "x": 2123.415952887364,
            "y": -228.01127688156998
          },
          "velocity": {
            "x": 0.93956458092359,
            "y": -0.01001758316022929
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 320.47646057855565,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 4645.333333333762,
          "totalLifespan": 42312
        },
        {
          "position": {
            "x": 1887.835119170335,
            "y": 125.10726346723315
          },
          "velocity": {
            "x": 0.8409065118798639,
            "y": 0.10709730841824243
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 330.9338378006518,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3286.3333333335263,
          "totalLifespan": 40703
        },
        {
          "position": {
            "x": 2031.8283472594017,
            "y": 1117.2543275545736
          },
          "velocity": {
            "x": 0.909909694249668,
            "y": 0.013002255201776374
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 353.2482598607908,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 711.3333333331294,
          "totalLifespan": 37928
        },
        {
          "position": {
            "x": 1660.7770288602092,
            "y": 22.217990601896517
          },
          "velocity": {
            "x": 0.7447430622691309,
            "y": 0.04658259893544017
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 299.3020758768723,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7537.333333334163,
          "totalLifespan": 44704
        },
        {
          "position": {
            "x": 1767.5672085117885,
            "y": 915.3835146934438
          },
          "velocity": {
            "x": 0.7947694282876491,
            "y": -0.08870464727568486
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 354.3187913225907,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 594.3333333330909,
          "totalLifespan": 37661
        },
        {
          "position": {
            "x": 1578.2313871109927,
            "y": 964.2947160904815
          },
          "velocity": {
            "x": 0.7134861605384294,
            "y": 0.09015903921447994
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 301.396616327915,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7168.33333333406,
          "totalLifespan": 44035
        },
        {
          "position": {
            "x": 2093.3065854063298,
            "y": 1142.657093147218
          },
          "velocity": {
            "x": 0.9476263401567575,
            "y": 0.01617842781379051
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 297.90964261631177,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7673.333333334134,
          "totalLifespan": 44490
        },
        {
          "position": {
            "x": 1835.3816458912418,
            "y": 645.9626667110356
          },
          "velocity": {
            "x": 0.831995306387738,
            "y": 0.045728543735639886
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 349.4838011248139,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1106.333333333121,
          "totalLifespan": 37873
        },
        {
          "position": {
            "x": 2111.9204316087175,
            "y": 519.293895383159
          },
          "velocity": {
            "x": 0.9599638325494017,
            "y": 0.07927414887299956
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 329.33310047154424,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3414.3333333334335,
          "totalLifespan": 40081
        },
        {
          "position": {
            "x": 1637.030119287306,
            "y": 906.7590395051598
          },
          "velocity": {
            "x": 0.7461395256551221,
            "y": -0.009023305780669745
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 350.9651274394821,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 941.3333333330673,
          "totalLifespan": 37508
        },
        {
          "position": {
            "x": 2091.647264759013,
            "y": 201.3227786285588
          },
          "velocity": {
            "x": 0.9559631008953207,
            "y": -0.021370979119638363
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 303.2991405600171,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6817.333333333941,
          "totalLifespan": 43284
        },
        {
          "position": {
            "x": 2068.5366698964745,
            "y": 258.94066304338713
          },
          "velocity": {
            "x": 0.9506142784450731,
            "y": 0.09692191732262438
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 332.95929817402856,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2945.333333333312,
          "totalLifespan": 39212
        },
        {
          "position": {
            "x": 1903.5388784946094,
            "y": 1044.7211837700563
          },
          "velocity": {
            "x": 0.875995802344502,
            "y": 0.019842297486541396
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 343.3220981672654,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1759.3333333331393,
          "totalLifespan": 37976
        },
        {
          "position": {
            "x": 2277.2561981221315,
            "y": 1148.6622621393672
          },
          "velocity": {
            "x": 1.0494268194111491,
            "y": 0.0038481259925854565
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 342.2443024998046,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1876.3333333331495,
          "totalLifespan": 38043
        },
        {
          "position": {
            "x": 2035.1810894122452,
            "y": 568.0572118201247
          },
          "velocity": {
            "x": 0.9391698612885543,
            "y": -0.06434703808805707
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 304.282705359228,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6613.333333333859,
          "totalLifespan": 42730
        },
        {
          "position": {
            "x": 2135.3398366709907,
            "y": 283.56783320616563
          },
          "velocity": {
            "x": 0.9881257920735812,
            "y": 0.09308208539674781
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 354.9119973722428,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 516.3333333329259,
          "totalLifespan": 36533
        },
        {
          "position": {
            "x": 1632.0201954232762,
            "y": -347.97674978263746
          },
          "velocity": {
            "x": 0.758373696757992,
            "y": -0.04898988638754316
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 359.2354561388915,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 76.33333333284097,
          "totalLifespan": 35943
        },
        {
          "position": {
            "x": 1553.7022619536858,
            "y": 306.75688466256594
          },
          "velocity": {
            "x": 0.7229884885777741,
            "y": 0.06861918746455622
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 305.6102012277462,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6374.333333333776,
          "totalLifespan": 42191
        },
        {
          "position": {
            "x": 2124.447737232683,
            "y": -220.41933057296046
          },
          "velocity": {
            "x": 0.9899570070981931,
            "y": 0.06040845275322737
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 337.73114754098526,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2358.333333333159,
          "totalLifespan": 38125
        },
        {
          "position": {
            "x": 1952.3560873806828,
            "y": 866.9581570035566
          },
          "velocity": {
            "x": 0.9123159286825362,
            "y": 0.07193477382172124
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 330.8425663488799,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3143.333333333252,
          "totalLifespan": 38810
        },
        {
          "position": {
            "x": 1574.63401463799,
            "y": 109.43851557375899
          },
          "velocity": {
            "x": 0.7368432450341721,
            "y": -0.08840524246764474
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 291.03867804611707,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8439.333333334072,
          "totalLifespan": 44056
        },
        {
          "position": {
            "x": 2059.287768099662,
            "y": -213.10632867998686
          },
          "velocity": {
            "x": 0.9649895820522945,
            "y": -0.010355224299180338
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 298.1418525590228,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7379.333333333904,
          "totalLifespan": 42946
        },
        {
          "position": {
            "x": 1900.3285223115524,
            "y": 267.81908695283914
          },
          "velocity": {
            "x": 0.8980758612058629,
            "y": -0.03985547127497907
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 288.834288834283,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8689.333333334049,
          "totalLifespan": 43956
        },
        {
          "position": {
            "x": 2070.165999430086,
            "y": 81.20140750461863
          },
          "velocity": {
            "x": 0.9825182721547808,
            "y": 0.11074753027387478
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 345.06100390316186,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1520.3333333329433,
          "totalLifespan": 36637
        },
        {
          "position": {
            "x": 2044.4538098315243,
            "y": -18.880699776501956
          },
          "velocity": {
            "x": 0.971698578817242,
            "y": 0.010320595777286867
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 310.0044202151152,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5655.3333333335495,
          "totalLifespan": 40722
        },
        {
          "position": {
            "x": 1986.0949763311517,
            "y": 819.4018554026298
          },
          "velocity": {
            "x": 0.9453093652218584,
            "y": 0.03705565446624835
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 339.70195909348445,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2092.3333333330143,
          "totalLifespan": 37109
        },
        {
          "position": {
            "x": 1828.0311411510108,
            "y": -359.2260615727673
          },
          "velocity": {
            "x": 0.8713208489756645,
            "y": -0.026917433024114087
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 312.7220331403858,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5286.333333333475,
          "totalLifespan": 40253
        },
        {
          "position": {
            "x": 1493.8435941459898,
            "y": -174.9796898711504
          },
          "velocity": {
            "x": 0.7130518349145551,
            "y": 0.01250623042482902
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 329.65303821038174,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3214.3333333331516,
          "totalLifespan": 38131
        },
        {
          "position": {
            "x": 1858.4241020008417,
            "y": 441.83925170681323
          },
          "velocity": {
            "x": 0.8883480411094161,
            "y": 0.06541912825423157
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 343.6362143072288,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1660.3333333329279,
          "totalLifespan": 36527
        },
        {
          "position": {
            "x": 1775.643575245548,
            "y": 136.73011508416144
          },
          "velocity": {
            "x": 0.8499969244832443,
            "y": 0.035252112981371736
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 293.7151427098422,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7857.333333333873,
          "totalLifespan": 42674
        },
        {
          "position": {
            "x": 1894.0583959715207,
            "y": 1068.4255227081596
          },
          "velocity": {
            "x": 0.9079858082317662,
            "y": 0.023784763885426486
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 310.9797003503354,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5480.333333333477,
          "totalLifespan": 40247
        },
        {
          "position": {
            "x": 1883.9656974758548,
            "y": 293.0814695206109
          },
          "velocity": {
            "x": 0.9044482465078396,
            "y": -0.0014809763100644413
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 287.97898569090927,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8682.333333333967,
          "totalLifespan": 43399
        },
        {
          "position": {
            "x": 1899.2110240688164,
            "y": -349.9839816812503
          },
          "velocity": {
            "x": 0.9130822231100318,
            "y": -0.06328575541485214
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 310.2008351560934,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5565.333333333476,
          "totalLifespan": 40232
        },
        {
          "position": {
            "x": 1956.1538552066304,
            "y": 360.87034008572806
          },
          "velocity": {
            "x": 0.941816974100453,
            "y": -0.05339350985187977
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 282.2458270106163,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 9536.333333334047,
          "totalLifespan": 44153
        },
        {
          "position": {
            "x": 1772.4107635767252,
            "y": 1109.5106786693289
          },
          "velocity": {
            "x": 0.8545857104999011,
            "y": 0.02818297138381814
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 329.3108923467789,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3221.3333333331025,
          "totalLifespan": 37788
        },
        {
          "position": {
            "x": 1520.3086701713294,
            "y": 522.7823469639372
          },
          "velocity": {
            "x": 0.7340939981512759,
            "y": 0.07177731338568219
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 291.5122225871488,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8109.333333333871,
          "totalLifespan": 42626
        },
        {
          "position": {
            "x": 1676.4226329502937,
            "y": 562.3881677701984
          },
          "velocity": {
            "x": 0.8118269408960284,
            "y": -0.023128566343375175
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 343.10874802692166,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1694.3333333328674,
          "totalLifespan": 36111
        },
        {
          "position": {
            "x": 1790.4380314883483,
            "y": -26.369283387123534
          },
          "velocity": {
            "x": 0.8683016641553882,
            "y": -0.029045854091906766
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 297.2323659427221,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7257.33333333371,
          "totalLifespan": 41624
        },
        {
          "position": {
            "x": 1867.3389675550532,
            "y": 528.2146437509737
          },
          "velocity": {
            "x": 0.9069154772001504,
            "y": -0.05592928060859028
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 298.4346313653464,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7079.333333333673,
          "totalLifespan": 41396
        },
        {
          "position": {
            "x": 2077.399993667184,
            "y": 647.9390219858801
          },
          "velocity": {
            "x": 1.0118850431891153,
            "y": -0.03936560498474282
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 274.6427058482469,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10634.333333334105,
          "totalLifespan": 44851
        },
        {
          "position": {
            "x": 1567.9368545750986,
            "y": 1029.1360413678055
          },
          "velocity": {
            "x": 0.7648472461341873,
            "y": 0.01191506927114342
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 308.76594035545656,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5669.333333333421,
          "totalLifespan": 39836
        },
        {
          "position": {
            "x": 2126.367317816342,
            "y": 132.475144319068
          },
          "velocity": {
            "x": 1.0387725050397167,
            "y": 0.09681672025788497
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 276.71510645487757,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10268.333333334054,
          "totalLifespan": 44385
        },
        {
          "position": {
            "x": 1518.2855481615977,
            "y": 1065.205102829962
          },
          "velocity": {
            "x": 0.7438929682320301,
            "y": 0.03556054353804452
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 292.9104477611905,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7791.333333333746,
          "totalLifespan": 41808
        },
        {
          "position": {
            "x": 1912.1388158039967,
            "y": -208.14602611246562
          },
          "velocity": {
            "x": 0.9396259537120254,
            "y": 0.007858386772913421
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 281.1161762674352,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 9517.33333333394,
          "totalLifespan": 43434
        },
        {
          "position": {
            "x": 1612.3812375062823,
            "y": 1058.8314210973645
          },
          "velocity": {
            "x": 0.7934947034972141,
            "y": 0.09080687509854446
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 305.3496293327981,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6061.333333333441,
          "totalLifespan": 39928
        },
        {
          "position": {
            "x": 1519.207367128364,
            "y": 591.2263009270897
          },
          "velocity": {
            "x": 0.7487468541785957,
            "y": 0.07094581603122747
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 279.9328565844186,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 9672.333333333945,
          "totalLifespan": 43489
        },
        {
          "position": {
            "x": 1761.9963168980057,
            "y": 301.6368795507464
          },
          "velocity": {
            "x": 0.8709818669787218,
            "y": 0.06511866593568968
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 302.61780104711914,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6393.333333333474,
          "totalLifespan": 40110
        },
        {
          "position": {
            "x": 1792.8674620334505,
            "y": 735.8291146557311
          },
          "velocity": {
            "x": 0.8875581495215091,
            "y": 0.047411112276899994
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 313.05695466873385,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5048.333333333246,
          "totalLifespan": 38715
        },
        {
          "position": {
            "x": 1807.3589458589636,
            "y": 692.9438569513584
          },
          "velocity": {
            "x": 0.8960629379568038,
            "y": -0.012028384356152612
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 279.5048270127902,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 9681.333333333916,
          "totalLifespan": 43298
        },
        {
          "position": {
            "x": 1407.0751535607938,
            "y": 329.42149037564195
          },
          "velocity": {
            "x": 0.6986470474482342,
            "y": -0.044615522693200946
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 351.5243192925372,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 809.3333333326126,
          "totalLifespan": 34376
        },
        {
          "position": {
            "x": 1529.6917747439948,
            "y": 391.4055130340501
          },
          "velocity": {
            "x": 0.7606622450243475,
            "y": -0.01490229420991343
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 315.24493794905436,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 4758.333333333177,
          "totalLifespan": 38275
        },
        {
          "position": {
            "x": 1659.1701487776113,
            "y": 1223.9972790464162
          },
          "velocity": {
            "x": 0.8262799545705488,
            "y": -0.027750105135646415
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 344.39584941257834,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1516.3333333327014,
          "totalLifespan": 34983
        },
        {
          "position": {
            "x": 1463.6563954379421,
            "y": 357.95656473806997
          },
          "velocity": {
            "x": 0.7300031897446325,
            "y": -0.008013387331459478
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 329.9687311426889,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3041.33333333291,
          "totalLifespan": 36458
        },
        {
          "position": {
            "x": 1425.5304130994557,
            "y": 4.339046318171766
          },
          "velocity": {
            "x": 0.7120531533963437,
            "y": -0.029259900487715363
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 301.50602409638464,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6473.333333333436,
          "totalLifespan": 39840
        },
        {
          "position": {
            "x": 1482.780153264672,
            "y": 1212.7911908670703
          },
          "velocity": {
            "x": 0.7417609571108713,
            "y": -0.033257982999270894
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 301.7662154682224,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6429.333333333421,
          "totalLifespan": 39746
        },
        {
          "position": {
            "x": 1468.5249816461867,
            "y": -233.36709501163
          },
          "velocity": {
            "x": 0.7357339587405579,
            "y": -0.03844466418639104
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 273.9061821009486,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10456.33333333395,
          "totalLifespan": 43723
        },
        {
          "position": {
            "x": 1840.3091974868114,
            "y": 927.45639101538
          },
          "velocity": {
            "x": 0.9233864513230173,
            "y": -0.089537091728026
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 284.97890898691276,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8744.333333333756,
          "totalLifespan": 41961
        },
        {
          "position": {
            "x": 1528.7387441601768,
            "y": 308.9095237721135
          },
          "velocity": {
            "x": 0.769370278892884,
            "y": 0.09561818090742058
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 272.7147954982107,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10599.333333333943,
          "totalLifespan": 43716
        },
        {
          "position": {
            "x": 1973.9764543556437,
            "y": 37.97470528971334
          },
          "velocity": {
            "x": 0.9949478096550798,
            "y": -0.12281655955861774
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 269.217721690747,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11150.333333333996,
          "totalLifespan": 44217
        },
        {
          "position": {
            "x": 1415.2137594498504,
            "y": -39.35463578479385
          },
          "velocity": {
            "x": 0.7165639288353968,
            "y": 0.08851967273732826
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 309.43179444328524,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5379.333333333191,
          "totalLifespan": 38296
        },
        {
          "position": {
            "x": 1662.5996026676735,
            "y": 1011.2809107015598
          },
          "velocity": {
            "x": 0.843103246788912,
            "y": -0.03123905127836988
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 264.56185855152256,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11856.333333334045,
          "totalLifespan": 44723
        },
        {
          "position": {
            "x": 1696.4031685007415,
            "y": 1274.3476371722954
          },
          "velocity": {
            "x": 0.8615556975625562,
            "y": 0.015894747937612908
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 351.33527627432045,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 809.3333333325035,
          "totalLifespan": 33626
        },
        {
          "position": {
            "x": 1684.9468002787944,
            "y": -204.21830201265925
          },
          "velocity": {
            "x": 0.8570431334072893,
            "y": -0.06766026136169821
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 265.3410113370469,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11689.333333334012,
          "totalLifespan": 44456
        },
        {
          "position": {
            "x": 1888.7500889809376,
            "y": 692.2834117470144
          },
          "velocity": {
            "x": 0.9621752873055992,
            "y": 0.12648509845361425
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 347.05483690368277,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1220.333333332549,
          "totalLifespan": 33937
        },
        {
          "position": {
            "x": 1631.4630915799235,
            "y": 919.9583157088907
          },
          "velocity": {
            "x": 0.8323791283570828,
            "y": 0.07176441292476214
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 275.1134609086189,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10079.333333333821,
          "totalLifespan": 42746
        },
        {
          "position": {
            "x": 1440.970356193531,
            "y": -346.4087108230633
          },
          "velocity": {
            "x": 0.7374464463631405,
            "y": -0.02445581662404969
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 300.6770619614282,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6425.333333333312,
          "totalLifespan": 38992
        },
        {
          "position": {
            "x": 1493.7936708337418,
            "y": 801.7539734263346
          },
          "velocity": {
            "x": 0.7656553925339157,
            "y": -0.06225415969062013
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 344.0917107583856,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1503.3333333325625,
          "totalLifespan": 34020
        },
        {
          "position": {
            "x": 1891.3405156811439,
            "y": -160.82698911700516
          },
          "velocity": {
            "x": 0.9709140224235812,
            "y": 0.07752385495265791
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 298.0416156670745,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6749.333333333349,
          "totalLifespan": 39216
        },
        {
          "position": {
            "x": 1978.9974127360404,
            "y": 238.0112486047844
          },
          "velocity": {
            "x": 1.0174793895815302,
            "y": 0.07132545594092415
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 272.46620438467056,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10414.333333333821,
          "totalLifespan": 42831
        },
        {
          "position": {
            "x": 1551.3537483915452,
            "y": 679.1521044420491
          },
          "velocity": {
            "x": 0.7988433307886276,
            "y": 0.022614706205364463
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 359.2969472710556,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 63.33333333240523,
          "totalLifespan": 32430
        },
        {
          "position": {
            "x": 1542.754690275217,
            "y": 1023.4340242243607
          },
          "velocity": {
            "x": 0.7956445024627252,
            "y": -0.09453134854612723
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 275.62189054726014,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 9893.33333333375,
          "totalLifespan": 42210
        },
        {
          "position": {
            "x": 1636.6817179394156,
            "y": 970.0959109353901
          },
          "velocity": {
            "x": 0.8453934493488545,
            "y": -0.07086174089975435
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 346.29143811114665,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1277.333333332492,
          "totalLifespan": 33544
        },
        {
          "position": {
            "x": 1384.2468867196505,
            "y": -157.38356612602786
          },
          "velocity": {
            "x": 0.7161132367923886,
            "y": 0.07031705364591719
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 359.1824094146897,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 73.33333333241453,
          "totalLifespan": 32290
        },
        {
          "position": {
            "x": 1875.7179721259552,
            "y": 172.87880166111458
          },
          "velocity": {
            "x": 0.9718745969564231,
            "y": 0.1090866413910095
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 261.9494650168474,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 12040.333333333963,
          "totalLifespan": 44207
        },
        {
          "position": {
            "x": 1558.7098758079105,
            "y": 430.81676132143855
          },
          "velocity": {
            "x": 0.808879022214785,
            "y": 0.00867181501198344
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 329.2797539372945,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2996.3333333327146,
          "totalLifespan": 35113
        },
        {
          "position": {
            "x": 1850.6786127973821,
            "y": 1394.8380873568617
          },
          "velocity": {
            "x": 0.961891170892594,
            "y": 0.052915461262672804
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 270.1298701298662,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10668.3333333338,
          "totalLifespan": 42735
        },
        {
          "position": {
            "x": 1592.9058840542568,
            "y": -103.54881412981999
          },
          "velocity": {
            "x": 0.8292066028392563,
            "y": 0.07856944774485848
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 297.16908162739173,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6769.3333333332885,
          "totalLifespan": 38786
        },
        {
          "position": {
            "x": 1907.4683110008232,
            "y": 768.7853071878895
          },
          "velocity": {
            "x": 0.9945090255479236,
            "y": -0.05128050233567062
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 339.9704579025195,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1883.3333333325381,
          "totalLifespan": 33850
        },
        {
          "position": {
            "x": 1522.1418601059045,
            "y": 1263.5375617557079
          },
          "velocity": {
            "x": 0.794852146269376,
            "y": 0.019057984970813922
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 300.16458110191087,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6362.333333333207,
          "totalLifespan": 38279
        },
        {
          "position": {
            "x": 1769.3886045321638,
            "y": 395.5917138835871
          },
          "velocity": {
            "x": 0.925412450069082,
            "y": 0.04408020025206224
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 346.82710040210196,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1210.3333333324238,
          "totalLifespan": 33077
        },
        {
          "position": {
            "x": 1705.7417396974442,
            "y": 28.908981894227757
          },
          "velocity": {
            "x": 0.8935263172851872,
            "y": -0.07373287979535297
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 284.3383064816407,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8466.333333333521,
          "totalLifespan": 40283
        },
        {
          "position": {
            "x": 1354.8906704564504,
            "y": 170.08568029874505
          },
          "velocity": {
            "x": 0.7108555458847877,
            "y": -0.046392567880283335
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 338.07313684335844,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2060.3333333325368,
          "totalLifespan": 33827
        },
        {
          "position": {
            "x": 1695.830733794147,
            "y": -339.85452591310377
          },
          "velocity": {
            "x": 0.8911354355197443,
            "y": -0.09314624976097127
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 333.3430648410436,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2536.3333333325945,
          "totalLifespan": 34253
        },
        {
          "position": {
            "x": 1529.111516724203,
            "y": 590.9250258248912
          },
          "velocity": {
            "x": 0.8060682744988114,
            "y": 0.07185962430590562
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 318.3152949072963,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 4140.333333332799,
          "totalLifespan": 35757
        },
        {
          "position": {
            "x": 1799.5738533157664,
            "y": 872.1263727731754
          },
          "velocity": {
            "x": 0.9516519583901861,
            "y": -0.11447417252446515
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 311.94325305180234,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 4855.333333332902,
          "totalLifespan": 36372
        },
        {
          "position": {
            "x": 1730.8714894357136,
            "y": 1369.6945320785567
          },
          "velocity": {
            "x": 0.9167751533028368,
            "y": 0.09422455001367858
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 251.97971349763662,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 13489.33333333402,
          "totalLifespan": 44956
        },
        {
          "position": {
            "x": 1700.335068872996,
            "y": 815.2407069340483
          },
          "velocity": {
            "x": 0.9020345192960374,
            "y": -0.031400932807098166
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 287.31106312714286,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7948.333333333393,
          "totalLifespan": 39365
        },
        {
          "position": {
            "x": 1914.844350350977,
            "y": 45.91941644486302
          },
          "velocity": {
            "x": 1.0174518333427562,
            "y": 0.09952184570848142
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 288.5396703717897,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7768.333333333358,
          "totalLifespan": 39135
        },
        {
          "position": {
            "x": 1386.7494679766085,
            "y": 551.5828435075617
          },
          "velocity": {
            "x": 0.7380252623611813,
            "y": -0.020007492995179687
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 265.98405133770245,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11069.333333333734,
          "totalLifespan": 42386
        },
        {
          "position": {
            "x": 1552.865421653554,
            "y": -111.7552577095829
          },
          "velocity": {
            "x": 0.8277534230562722,
            "y": -0.01711560838335994
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 329.3346597226365,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2911.33333333258,
          "totalLifespan": 34178
        },
        {
          "position": {
            "x": 1928.1154834761703,
            "y": -100.33544525741372
          },
          "velocity": {
            "x": 1.0310777986503652,
            "y": 0.020817831948492307
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 261.276575926224,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11776.333333333789,
          "totalLifespan": 42943
        },
        {
          "position": {
            "x": 1325.4324059175926,
            "y": 246.46852590264345
          },
          "velocity": {
            "x": 0.7099263020447615,
            "y": -0.07776972739234202
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 307.814904374592,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5275.333333332912,
          "totalLifespan": 36392
        },
        {
          "position": {
            "x": 1651.0722939495265,
            "y": 447.9416577827419
          },
          "velocity": {
            "x": 0.8857683980415922,
            "y": 0.045951523171274294
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 252.01676506376538,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 13311.333333333941,
          "totalLifespan": 44378
        },
        {
          "position": {
            "x": 1552.7407562945923,
            "y": 468.34074667563976
          },
          "velocity": {
            "x": 0.8343582785032894,
            "y": 0.0032112951245848458
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 287.0141887723628,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7887.333333333326,
          "totalLifespan": 38904
        },
        {
          "position": {
            "x": 1424.694662855312,
            "y": -110.80632821860516
          },
          "velocity": {
            "x": 0.766789377209521,
            "y": -0.03766221648665012
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 340.8236265248201,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1742.3333333323874,
          "totalLifespan": 32709
        },
        {
          "position": {
            "x": 1623.9429133193598,
            "y": 470.300522910707
          },
          "velocity": {
            "x": 0.8754409236222738,
            "y": -0.01675348342386419
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 308.07130203720567,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5211.333333332873,
          "totalLifespan": 36128
        },
        {
          "position": {
            "x": 1401.9702031418547,
            "y": 802.4327167002418
          },
          "velocity": {
            "x": 0.7570033494286326,
            "y": -0.00031877794030203053
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 322.2644354862173,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3614.333333332617,
          "totalLifespan": 34481
        },
        {
          "position": {
            "x": 1551.8048447960311,
            "y": -67.90351048375737
          },
          "velocity": {
            "x": 0.8392670875046496,
            "y": -0.0303874088706186
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 283.190810465858,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8358.333333333365,
          "totalLifespan": 39175
        },
        {
          "position": {
            "x": 1320.7026064431338,
            "y": 77.11002911398884
          },
          "velocity": {
            "x": 0.7154401985065932,
            "y": 0.08116047394216995
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 342.76165129666185,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1547.3333333324151,
          "totalLifespan": 32314
        },
        {
          "position": {
            "x": 1303.19255561731,
            "y": -478.12707097190753
          },
          "velocity": {
            "x": 0.7071039368514949,
            "y": -0.06159937985136297
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 277.9509350492652,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 9067.333333333427,
          "totalLifespan": 39784
        },
        {
          "position": {
            "x": 1431.0688131279987,
            "y": 43.34279510700773
          },
          "velocity": {
            "x": 0.77775478974347,
            "y": -0.0776825741880449
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 337.65598238317654,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2029.3333333323899,
          "totalLifespan": 32696
        },
        {
          "position": {
            "x": 1731.7091967392128,
            "y": 454.36501801218435
          },
          "velocity": {
            "x": 0.9442252981129646,
            "y": 0.11201339752091077
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 326.46037914974033,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3140.333333332509,
          "totalLifespan": 33707
        },
        {
          "position": {
            "x": 1506.853543860332,
            "y": 978.5088516215307
          },
          "velocity": {
            "x": 0.822967528050441,
            "y": 0.07908440971296439
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 295.07668340898977,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6714.33333333306,
          "totalLifespan": 37231
        },
        {
          "position": {
            "x": 1519.9837915693163,
            "y": 1393.93854485412
          },
          "velocity": {
            "x": 0.8315009800707243,
            "y": 0.09973997324119649
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 277.5654814627352,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 9048.333333333389,
          "totalLifespan": 39515
        },
        {
          "position": {
            "x": 1525.550656621235,
            "y": 21.115399310334396
          },
          "velocity": {
            "x": 0.8359181680116586,
            "y": -0.017178583340865864
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 274.50488844321796,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 9473.333333333429,
          "totalLifespan": 39890
        },
        {
          "position": {
            "x": 1854.8721211754937,
            "y": 526.644798167467
          },
          "velocity": {
            "x": 1.0180417789107954,
            "y": 0.02474717401384391
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 307.917640762758,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5136.333333332781,
          "totalLifespan": 35503
        },
        {
          "position": {
            "x": 1893.890603053385,
            "y": -147.87195862615965
          },
          "velocity": {
            "x": 1.0411713045922595,
            "y": 0.1277831018986596
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 278.0920348570553,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8929.333333333354,
          "totalLifespan": 39246
        },
        {
          "position": {
            "x": 1805.6966253717162,
            "y": 551.0503460238812
          },
          "velocity": {
            "x": 0.9943263355570939,
            "y": 0.12771768943850223
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 245.64330319903945,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 14090.33333333391,
          "totalLifespan": 44357
        },
        {
          "position": {
            "x": 1355.0349138942297,
            "y": 646.5199080751138
          },
          "velocity": {
            "x": 0.7473992906201066,
            "y": 0.0628864623092532
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 338.64641055975113,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1905.3333333324297,
          "totalLifespan": 32122
        },
        {
          "position": {
            "x": 1526.554530887306,
            "y": 822.2112266421245
          },
          "velocity": {
            "x": 0.8434002933078706,
            "y": 0.11040629434137783
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 260.6379148966784,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11500.333333333612,
          "totalLifespan": 41667
        },
        {
          "position": {
            "x": 1378.2560177883288,
            "y": 1403.7948625992685
          },
          "velocity": {
            "x": 0.7627316091800482,
            "y": 0.08025151373939318
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 288.8350161174329,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7420.333333333118,
          "totalLifespan": 37537
        },
        {
          "position": {
            "x": 1886.1279349576778,
            "y": 833.3538050741615
          },
          "velocity": {
            "x": 1.0455254628368573,
            "y": -0.03155521791243993
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 358.36313071117326,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 137.33333333256616,
          "totalLifespan": 30204
        },
        {
          "position": {
            "x": 1525.6463850613563,
            "y": 765.9312440414383
          },
          "velocity": {
            "x": 0.8471107079741361,
            "y": 0.08145434172221865
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 253.7572797294727,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 12567.333333333705,
          "totalLifespan": 42584
        },
        {
          "position": {
            "x": 1807.9689379153235,
            "y": 1149.4425280587948
          },
          "velocity": {
            "x": 1.0055444593522689,
            "y": -0.01682118200730698
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 278.4431137724555,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8777.333333333287,
          "totalLifespan": 38744
        },
        {
          "position": {
            "x": 1382.781811461558,
            "y": 1427.3012296893082
          },
          "velocity": {
            "x": 0.7703519841011762,
            "y": 0.0767346910323902
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 243.39533096792698,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 14332.333333333885,
          "totalLifespan": 44249
        },
        {
          "position": {
            "x": 1775.7676976318114,
            "y": 953.996749967229
          },
          "velocity": {
            "x": 0.990941795553488,
            "y": -0.05951341645336171
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 301.5565839293279,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5788.333333332815,
          "totalLifespan": 35655
        },
        {
          "position": {
            "x": 1403.3210880931167,
            "y": 275.05726544622473
          },
          "velocity": {
            "x": 0.7844164830034077,
            "y": -0.07587924965572182
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 251.1464670098236,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 12923.333333333718,
          "totalLifespan": 42740
        },
        {
          "position": {
            "x": 1244.200708785183,
            "y": -388.29180910686125
          },
          "velocity": {
            "x": 0.6966409343702354,
            "y": -0.07824679691333827
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 262.39623888929543,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11072.333333333509,
          "totalLifespan": 40839
        },
        {
          "position": {
            "x": 1547.8696209579227,
            "y": 203.19460861779623
          },
          "velocity": {
            "x": 0.8681265400773429,
            "y": 0.06529850589255072
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 249.56260060185826,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 13150.333333333727,
          "totalLifespan": 42867
        },
        {
          "position": {
            "x": 1597.1340203402476,
            "y": -271.8070708584367
          },
          "velocity": {
            "x": 0.8972663035619306,
            "y": -0.08134101847188982
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 249.92394636463303,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 13066.33333333371,
          "totalLifespan": 42733
        },
        {
          "position": {
            "x": 1428.4098822114327,
            "y": 513.1655322450913
          },
          "velocity": {
            "x": 0.8038322353469141,
            "y": -0.008100738549371059
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 323.3162507202091,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3360.3333333324013,
          "totalLifespan": 32977
        },
        {
          "position": {
            "x": 1568.9237868320968,
            "y": 834.3503416104645
          },
          "velocity": {
            "x": 0.8843989779211334,
            "y": 0.09006654737372533
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 300.76292738062165,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5823.333333332776,
          "totalLifespan": 35390
        },
        {
          "position": {
            "x": 1490.7092449279903,
            "y": 1144.8062581743159
          },
          "velocity": {
            "x": 0.8417330575538859,
            "y": 0.09603181363299954
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 286.3147684099938,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7596.333333333059,
          "totalLifespan": 37113
        },
        {
          "position": {
            "x": 1747.4197133458347,
            "y": 1023.9498577033039
          },
          "velocity": {
            "x": 0.9883595663720542,
            "y": -0.06568832487396725
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 302.42038942897676,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5610.333333332727,
          "totalLifespan": 35077
        },
        {
          "position": {
            "x": 1277.0143682410326,
            "y": -211.43623791973252
          },
          "velocity": {
            "x": 0.7235208885218308,
            "y": -0.07512986522504073
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 259.59063610736473,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11378.33333333349,
          "totalLifespan": 40795
        },
        {
          "position": {
            "x": 1383.4984066656484,
            "y": -114.41870441810397
          },
          "velocity": {
            "x": 0.7851863828976567,
            "y": 0.0010682310781965087
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 343.6931079323891,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 1393.3333333325277,
          "totalLifespan": 30760
        },
        {
          "position": {
            "x": 1837.8793912232577,
            "y": 1031.1422836172612
          },
          "velocity": {
            "x": 1.04484331507857,
            "y": 0.09231586039382565
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 336.1467656145589,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2080.333333332484,
          "totalLifespan": 31397
        },
        {
          "position": {
            "x": 1758.8131827702807,
            "y": 307.5304413120871
          },
          "velocity": {
            "x": 1.0016020403019703,
            "y": 0.029104000507848823
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 248.98383590131124,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 13049.33333333365,
          "totalLifespan": 42316
        },
        {
          "position": {
            "x": 1475.2549899023775,
            "y": 573.816300244462
          },
          "velocity": {
            "x": 0.8415601767840153,
            "y": -0.02975136069802124
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 273.42917305742685,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 9250.333333333228,
          "totalLifespan": 38467
        },
        {
          "position": {
            "x": 1357.078422393014,
            "y": -85.13213590596462
          },
          "velocity": {
            "x": 0.775473384224555,
            "y": 0.07586519374606732
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 336.2044122826775,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2064.3333333324963,
          "totalLifespan": 31231
        },
        {
          "position": {
            "x": 1506.4572566963286,
            "y": -304.0522734709573
          },
          "velocity": {
            "x": 0.8623109654815972,
            "y": -0.01645528642368085
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 319.9731371531593,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3642.333333332371,
          "totalLifespan": 32759
        },
        {
          "position": {
            "x": 1507.926683344862,
            "y": 688.8979362523517
          },
          "velocity": {
            "x": 0.8646368597161026,
            "y": 0.03678858479413904
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 246.3218850780321,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 13414.333333333661,
          "totalLifespan": 42481
        },
        {
          "position": {
            "x": 1439.6664369016612,
            "y": 367.4208693693585
          },
          "velocity": {
            "x": 0.8269192630107026,
            "y": -0.004137399651119272
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 282.1946673150202,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8000.333333333052,
          "totalLifespan": 37017
        },
        {
          "position": {
            "x": 1387.1721560304527,
            "y": 772.1075113847305
          },
          "velocity": {
            "x": 0.7981427825261416,
            "y": 0.09757309472346541
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 297.6452119309324,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6068.33333333273,
          "totalLifespan": 35035
        },
        {
          "position": {
            "x": 1502.4719893808983,
            "y": -106.16368646271852
          },
          "velocity": {
            "x": 0.8659780918621905,
            "y": 0.036942307972383445
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 238.68482597330765,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 14697.33333333378,
          "totalLifespan": 43614
        },
        {
          "position": {
            "x": 1683.9954932376393,
            "y": 1133.559986605048
          },
          "velocity": {
            "x": 0.9722837720771467,
            "y": -0.06590256132070027
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 318.8414690271022,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3726.333333332382,
          "totalLifespan": 32593
        },
        {
          "position": {
            "x": 1612.230727684377,
            "y": 837.6830960853889
          },
          "velocity": {
            "x": 0.9324642728075891,
            "y": -0.026333443065214467
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 305.47703180212835,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5143.333333332556,
          "totalLifespan": 33960
        },
        {
          "position": {
            "x": 1274.3798793088565,
            "y": 656.6242497484523
          },
          "velocity": {
            "x": 0.738342919645933,
            "y": 0.010001701162775265
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 294.3969070699664,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6410.333333332756,
          "totalLifespan": 35177
        },
        {
          "position": {
            "x": 1631.8791765302062,
            "y": 865.9537564935118
          },
          "velocity": {
            "x": 0.9471150182995716,
            "y": 0.02696618635482171
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 281.42864920782154,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8017.333333333011,
          "totalLifespan": 36734
        },
        {
          "position": {
            "x": 1515.565029123017,
            "y": 696.105153290048
          },
          "velocity": {
            "x": 0.8811424587924438,
            "y": -0.0405207291183739
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 285.2720035382615,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7509.333333332922,
          "totalLifespan": 36176
        },
        {
          "position": {
            "x": 1381.578334734127,
            "y": 280.10320481364386
          },
          "velocity": {
            "x": 0.8046466713652677,
            "y": -0.0183227127403049
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 335.5591023093804,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2084.333333332533,
          "totalLifespan": 30701
        },
        {
          "position": {
            "x": 1474.6481598183284,
            "y": -271.27163151878364
          },
          "velocity": {
            "x": 0.8603548190305248,
            "y": -0.07507050133229379
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 269.21465968586534,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 9633.333333333176,
          "totalLifespan": 38200
        },
        {
          "position": {
            "x": 1462.9706531053585,
            "y": -29.388760966192763
          },
          "velocity": {
            "x": 0.8550383711895969,
            "y": -0.09674133337369425
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 231.02369646915434,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 15920.333333333856,
          "totalLifespan": 44437
        },
        {
          "position": {
            "x": 1671.2347414691592,
            "y": 881.3077660308504
          },
          "velocity": {
            "x": 0.9784746729913374,
            "y": 0.09826766715707913
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 332.2633985021007,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2376.3333333325218,
          "totalLifespan": 30843
        },
        {
          "position": {
            "x": 1562.1245937330962,
            "y": 715.9053857481824
          },
          "velocity": {
            "x": 0.9162021077613155,
            "y": -0.1139709770894043
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 234.3105817682053,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 15243.333333333767,
          "totalLifespan": 43660
        },
        {
          "position": {
            "x": 1368.7109892956435,
            "y": 489.61369788149716
          },
          "velocity": {
            "x": 0.8041780195626734,
            "y": -0.07583349674258995
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 320.7689408217214,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3469.333333332438,
          "totalLifespan": 31836
        },
        {
          "position": {
            "x": 1558.0118909215832,
            "y": 330.84108828815897
          },
          "velocity": {
            "x": 0.9170170046624788,
            "y": -0.019639211498907683
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 227.1744701713679,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 16556.333333333914,
          "totalLifespan": 44873
        },
        {
          "position": {
            "x": 1342.0522961243034,
            "y": 73.2672437933843
          },
          "velocity": {
            "x": 0.7913044198846101,
            "y": -0.031422313877188315
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 330.9160677701633,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2484.333333332526,
          "totalLifespan": 30751
        },
        {
          "position": {
            "x": 1570.2286710508138,
            "y": 654.5549946869843
          },
          "velocity": {
            "x": 0.9274829716779546,
            "y": 0.10309864460995471
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 330.20186587784974,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 2546.333333332526,
          "totalLifespan": 30763
        },
        {
          "position": {
            "x": 1561.7058392790068,
            "y": 874.038644892418
          },
          "velocity": {
            "x": 0.9240862954313426,
            "y": -0.04495231949131326
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 253.25940356661147,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11871.333333333363,
          "totalLifespan": 40038
        },
        {
          "position": {
            "x": 1328.0310120585714,
            "y": 842.9780058487628
          },
          "velocity": {
            "x": 0.7872145892463538,
            "y": -0.032168079979265116
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 229.9722815467768,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 15897.333333333794,
          "totalLifespan": 44014
        },
        {
          "position": {
            "x": 1548.6212125161965,
            "y": 956.8480187697224
          },
          "velocity": {
            "x": 0.9196087960309572,
            "y": 0.01344975575706718
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 317.7458410641945,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3732.33333333244,
          "totalLifespan": 31799
        },
        {
          "position": {
            "x": 1692.8782466028724,
            "y": 379.07211906947987
          },
          "velocity": {
            "x": 1.0070661788238617,
            "y": -0.06645263774463876
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 224.90801650127742,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 16828.33333333393,
          "totalLifespan": 44845
        },
        {
          "position": {
            "x": 1438.1125587097854,
            "y": -281.663948317051
          },
          "velocity": {
            "x": 0.8570396655004923,
            "y": 0.010011428707170415
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 262.201156310226,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10431.333333333176,
          "totalLifespan": 38398
        },
        {
          "position": {
            "x": 1676.9682683037934,
            "y": 626.4789163752697
          },
          "velocity": {
            "x": 1.0011750855545167,
            "y": -0.08511957005682166
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 282.45411877125935,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7664.333333332837,
          "totalLifespan": 35581
        },
        {
          "position": {
            "x": 1620.4556290357882,
            "y": 709.1454568316968
          },
          "velocity": {
            "x": 0.969172026935306,
            "y": 0.05021925972835431
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 231.94303153611088,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 15385.333333333703,
          "totalLifespan": 43252
        },
        {
          "position": {
            "x": 1332.7029160821414,
            "y": 841.0254521293552
          },
          "velocity": {
            "x": 0.798503844267291,
            "y": 0.022928332856505005
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 246.99092344119907,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 12727.333333333405,
          "totalLifespan": 40544
        },
        {
          "position": {
            "x": 1263.2294258952197,
            "y": 591.419343239196
          },
          "velocity": {
            "x": 0.758240951917904,
            "y": 0.02121617541031953
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 278.7351514137572,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8095.3333333328865,
          "totalLifespan": 35862
        },
        {
          "position": {
            "x": 1279.5714032353742,
            "y": -188.5405010704029
          },
          "velocity": {
            "x": 0.7694356002617937,
            "y": -0.015838107034477248
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 292.7129781741453,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6371.333333332597,
          "totalLifespan": 34088
        },
        {
          "position": {
            "x": 1729.2148551648336,
            "y": 661.0983297302536
          },
          "velocity": {
            "x": 1.0416956958824146,
            "y": -0.11539153299501607
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 225.20179980554468,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 16560.33333333382,
          "totalLifespan": 44227
        },
        {
          "position": {
            "x": 1372.0452588223868,
            "y": 67.022493801079
          },
          "velocity": {
            "x": 0.8280297277141766,
            "y": 0.040235507616583205
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 274.33774834437486,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8623.333333332928,
          "totalLifespan": 36240
        },
        {
          "position": {
            "x": 1502.058026920412,
            "y": 909.8963616786824
          },
          "velocity": {
            "x": 0.9081366547281664,
            "y": -0.04564332446437762
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 257.80641138878934,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10927.333333333172,
          "totalLifespan": 38494
        },
        {
          "position": {
            "x": 1448.8888961330974,
            "y": 842.3999068234616
          },
          "velocity": {
            "x": 0.8775826142538173,
            "y": 0.02603508644578202
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 309.35948283939683,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 4504.333333332426,
          "totalLifespan": 32021
        },
        {
          "position": {
            "x": 1697.3574404647402,
            "y": 695.0239876124393
          },
          "velocity": {
            "x": 1.0299499031946433,
            "y": -0.07502093086500282
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 220.96089385474366,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 17283.333333333947,
          "totalLifespan": 44750
        },
        {
          "position": {
            "x": 1217.8561582153568,
            "y": 942.3028243446676
          },
          "velocity": {
            "x": 0.7403380901005115,
            "y": 0.07826589215584463
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 309.39468982164584,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 4484.333333332434,
          "totalLifespan": 31901
        },
        {
          "position": {
            "x": 1211.940931554071,
            "y": 620.5635279513549
          },
          "velocity": {
            "x": 0.7380882652582471,
            "y": -0.07994501905914093
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 255.65704795516035,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11169.33333333317,
          "totalLifespan": 38536
        },
        {
          "position": {
            "x": 1631.1403425296578,
            "y": 250.9544126075379
          },
          "velocity": {
            "x": 0.9952046019094555,
            "y": -0.13023192086342683
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 284.88658420001263,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7202.3333333326755,
          "totalLifespan": 34519
        },
        {
          "position": {
            "x": 1584.899238939391,
            "y": -20.85243518716686
          },
          "velocity": {
            "x": 0.9687648159775949,
            "y": 0.03898115641013216
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 283.06946967731426,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7410.333333332702,
          "totalLifespan": 34677
        },
        {
          "position": {
            "x": 1532.3999803807142,
            "y": 313.73205639039094
          },
          "velocity": {
            "x": 0.9383955789226668,
            "y": -0.08464803234055356
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 310.78123513180174,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 4310.33333333246,
          "totalLifespan": 31527
        },
        {
          "position": {
            "x": 1615.8266206960266,
            "y": -334.4598178039396
          },
          "velocity": {
            "x": 0.991304675273659,
            "y": -0.059566012166110426
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 221.97004085337775,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 16893.33333333382,
          "totalLifespan": 44060
        },
        {
          "position": {
            "x": 1590.7339178718937,
            "y": 1096.927593137591
          },
          "velocity": {
            "x": 0.9777098450349949,
            "y": -0.04460510042457965
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 286.13301286749305,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7000.333333332612,
          "totalLifespan": 34117
        },
        {
          "position": {
            "x": 1298.6685106115876,
            "y": 776.4725558765341
          },
          "velocity": {
            "x": 0.7996727282091193,
            "y": 0.07637002056707652
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 264.86897901489976,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 9721.333333332968,
          "totalLifespan": 36788
        },
        {
          "position": {
            "x": 1466.4617545620847,
            "y": 1147.0164684246558
          },
          "velocity": {
            "x": 0.9046648701802056,
            "y": 0.014615553589734384
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 249.1801598688267,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 12015.33333333321,
          "totalLifespan": 39032
        },
        {
          "position": {
            "x": 1616.4320672400393,
            "y": 238.78003061366968
          },
          "velocity": {
            "x": 0.9990309439061118,
            "y": 0.10512649984937358
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 262.47769426269736,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10019.333333332987,
          "totalLifespan": 36986
        },
        {
          "position": {
            "x": 1632.0335560714338,
            "y": 1199.38522478143
          },
          "velocity": {
            "x": 1.0105470935426433,
            "y": 0.06755240504343968
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 306.956411556016,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 4651.333333332462,
          "totalLifespan": 31568
        },
        {
          "position": {
            "x": 1493.7496641615521,
            "y": -333.5358973748391
          },
          "velocity": {
            "x": 0.9266437122590393,
            "y": 0.0361734685293517
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 309.2862624712301,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 4405.333333332479,
          "totalLifespan": 31272
        },
        {
          "position": {
            "x": 1283.2111737740013,
            "y": 1087.4368042777626
          },
          "velocity": {
            "x": 0.7975209283865828,
            "y": 0.05656134121494158
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 318.65592817534593,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 3479.333333332552,
          "totalLifespan": 30296
        },
        {
          "position": {
            "x": 1251.0018111890543,
            "y": 304.3045138422218
          },
          "velocity": {
            "x": 0.7789550505536025,
            "y": 0.032478791191737244
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 284.3064939663137,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7126.333333332583,
          "totalLifespan": 33893
        },
        {
          "position": {
            "x": 1374.2885423210275,
            "y": -95.40375029177883
          },
          "velocity": {
            "x": 0.8573228585907514,
            "y": 0.03699033698269119
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 240.78710194272008,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 13227.3333333333,
          "totalLifespan": 39944
        },
        {
          "position": {
            "x": 1379.683479001351,
            "y": 329.95969719004756
          },
          "velocity": {
            "x": 0.8623021743758673,
            "y": 0.027178798941467942
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 254.540633700122,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11048.333333333054,
          "totalLifespan": 37715
        },
        {
          "position": {
            "x": 1442.2895495107743,
            "y": 198.80372490077593
          },
          "velocity": {
            "x": 0.9031243265565562,
            "y": -0.07090435508882932
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 269.4600674915688,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8943.333333332817,
          "totalLifespan": 35560
        },
        {
          "position": {
            "x": 1433.0639288624734,
            "y": 469.61971086936444
          },
          "velocity": {
            "x": 0.8990363418208703,
            "y": 0.013655899331376311
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 246.26000978448533,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 12270.333333333174,
          "totalLifespan": 38837
        },
        {
          "position": {
            "x": 1334.916462829306,
            "y": 480.12236607623595
          },
          "velocity": {
            "x": 0.8390424027840011,
            "y": 0.07528817632125648
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 297.12400398407374,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5611.33333333244,
          "totalLifespan": 32128
        },
        {
          "position": {
            "x": 1372.6883675359747,
            "y": 32.53229809375733
          },
          "velocity": {
            "x": 0.8644133296826197,
            "y": -0.07210629266704421
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 264.3142476697783,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 9581.333333332865,
          "totalLifespan": 36048
        },
        {
          "position": {
            "x": 1154.2243609580794,
            "y": 463.7214079417435
          },
          "velocity": {
            "x": 0.7282172624341327,
            "y": 0.05947285777318712
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 244.0213486605782,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 12555.333333333183,
          "totalLifespan": 38972
        },
        {
          "position": {
            "x": 1593.7902940831825,
            "y": 960.6683639759262
          },
          "velocity": {
            "x": 1.0074527775494455,
            "y": 0.022797814797247143
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 279.4230203120478,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7603.333333332603,
          "totalLifespan": 33970
        },
        {
          "position": {
            "x": 1199.7208820948329,
            "y": 84.91684124482107
          },
          "velocity": {
            "x": 0.759797898730114,
            "y": 0.04226708951370816
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 242.2336427092135,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 12794.333333333194,
          "totalLifespan": 39111
        },
        {
          "position": {
            "x": 1205.9680146165126,
            "y": 363.1108797003434
          },
          "velocity": {
            "x": 0.7652081311018213,
            "y": -0.05257160927125001
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 283.21552653648905,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7121.333333332509,
          "totalLifespan": 33388
        },
        {
          "position": {
            "x": 1629.5824496805922,
            "y": -300.5216924379799
          },
          "velocity": {
            "x": 1.0359710423907302,
            "y": 0.017187008774568645
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 223.53804978565,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 16004.33333333353,
          "totalLifespan": 42221
        },
        {
          "position": {
            "x": 1458.1757883835512,
            "y": 829.3068048967455
          },
          "velocity": {
            "x": 0.9287743875054764,
            "y": -0.1098929760430847
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 262.36631016043276,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 9737.33333333284,
          "totalLifespan": 35904
        },
        {
          "position": {
            "x": 1120.2022342512948,
            "y": 596.8042669932528
          },
          "velocity": {
            "x": 0.7148706025853913,
            "y": -0.08324745997531266
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 211.01061561594716,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 18440.333333334005,
          "totalLifespan": 44557
        },
        {
          "position": {
            "x": 1232.0321265395694,
            "y": 311.95922691243015
          },
          "velocity": {
            "x": 0.7877443264319607,
            "y": 0.0729584750120361
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 285.19328956966706,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6837.3333333324335,
          "totalLifespan": 32904
        },
        {
          "position": {
            "x": 1297.7185863833415,
            "y": -357.1714140730885
          },
          "velocity": {
            "x": 0.8313379797458825,
            "y": -0.10160715093776272
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 269.3391614424635,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8757.33333333271,
          "totalLifespan": 34774
        },
        {
          "position": {
            "x": 1381.1861263906756,
            "y": -152.10359624710833
          },
          "velocity": {
            "x": 0.8865122762455958,
            "y": 0.01588611028368225
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 240.43828287764768,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 12912.333333333156,
          "totalLifespan": 38879
        },
        {
          "position": {
            "x": 1495.1177649049177,
            "y": 453.8170560859962
          },
          "velocity": {
            "x": 0.961490524054587,
            "y": -0.11796688253328426
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 209.98852152775683,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 18514.33333333399,
          "totalLifespan": 44431
        },
        {
          "position": {
            "x": 1280.0259576552253,
            "y": 651.5672939032777
          },
          "velocity": {
            "x": 0.8247589933345427,
            "y": 0.010791950421996328
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 272.49583004126794,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8306.333333332639,
          "totalLifespan": 34173
        },
        {
          "position": {
            "x": 1602.0106928013083,
            "y": -170.90109815584384
          },
          "velocity": {
            "x": 1.034222526017635,
            "y": 0.09113761693804365
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 253.33224302886995,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10870.333333332912,
          "totalLifespan": 36687
        },
        {
          "position": {
            "x": 1140.3566626720594,
            "y": -56.90671099286273
          },
          "velocity": {
            "x": 0.7376175049625349,
            "y": -0.050768898129152515
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 230.28798411122173,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 14513.333333333301,
          "totalLifespan": 40280
        },
        {
          "position": {
            "x": 1129.0590670872602,
            "y": 1140.866043701074
          },
          "velocity": {
            "x": 0.7317297907240699,
            "y": -0.025500064276408576
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 274.97920874421635,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7951.333333332565,
          "totalLifespan": 33668
        },
        {
          "position": {
            "x": 1529.129625921202,
            "y": -184.44080832150587
          },
          "velocity": {
            "x": 0.9929413155332644,
            "y": -0.10883422494584728
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 268.13697040047134,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8793.333333332663,
          "totalLifespan": 34460
        },
        {
          "position": {
            "x": 1432.471408913164,
            "y": 1015.0554579616212
          },
          "velocity": {
            "x": 0.9319918080111896,
            "y": -0.09828707398483226
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 221.1616864118173,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 16081.33333333345,
          "totalLifespan": 41698
        },
        {
          "position": {
            "x": 1566.096429357791,
            "y": 1295.0907731106136
          },
          "velocity": {
            "x": 1.020923356817352,
            "y": 0.10031540623286533
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 252.7599275004165,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10847.333333332872,
          "totalLifespan": 36414
        },
        {
          "position": {
            "x": 1110.3114288152494,
            "y": 45.899674247527464
          },
          "velocity": {
            "x": 0.7252197444907015,
            "y": 0.06271591281692707
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 282.43758455295546,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7007.333333332435,
          "totalLifespan": 32524
        },
        {
          "position": {
            "x": 1387.4129397459008,
            "y": -290.0125720769406
          },
          "velocity": {
            "x": 0.9079927616138259,
            "y": -0.08507063788432377
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 247.19585849870958,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11621.333333332943,
          "totalLifespan": 37088
        },
        {
          "position": {
            "x": 1258.5486134103076,
            "y": -26.069603185245015
          },
          "velocity": {
            "x": 0.8252777792854586,
            "y": -0.09044468976003434
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 288.1617484962148,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6336.333333332479,
          "totalLifespan": 31753
        },
        {
          "position": {
            "x": 1546.6340062234492,
            "y": 234.52244591910795
          },
          "velocity": {
            "x": 1.0161852866120227,
            "y": 0.00031952859731109644
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 288.19389655064555,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6320.333333332484,
          "totalLifespan": 31687
        },
        {
          "position": {
            "x": 1186.9091434525667,
            "y": 373.29444679987483
          },
          "velocity": {
            "x": 0.7813753413117329,
            "y": 0.08499048967921542
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 236.4263664427115,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 13232.333333333096,
          "totalLifespan": 38549
        },
        {
          "position": {
            "x": 1544.13115854384,
            "y": 1424.309505342989
          },
          "velocity": {
            "x": 1.018556173181983,
            "y": 0.08973073872970494
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 294.43563266760395,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5626.33333333253,
          "totalLifespan": 30893
        },
        {
          "position": {
            "x": 1495.485609238727,
            "y": 85.14550423324428
          },
          "velocity": {
            "x": 0.9884240642688065,
            "y": -0.09356146337953206
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 287.6152456990876,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6346.3333333324945,
          "totalLifespan": 31563
        },
        {
          "position": {
            "x": 1517.3138867138682,
            "y": 676.1014141304585
          },
          "velocity": {
            "x": 1.0048436335853799,
            "y": -0.00340130374408435
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 215.0843956983103,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 16956.333333333543,
          "totalLifespan": 42123
        },
        {
          "position": {
            "x": 1222.2794362067823,
            "y": 444.5750612829524
          },
          "velocity": {
            "x": 0.8110679735944454,
            "y": 0.09495829164514556
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 243.27378390013297,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 12051.33333333294,
          "totalLifespan": 37168
        },
        {
          "position": {
            "x": 1333.0858099575753,
            "y": 840.6811452078086
          },
          "velocity": {
            "x": 0.886360245982438,
            "y": 0.05531585773952913
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 244.0832003462214,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11904.333333332916,
          "totalLifespan": 36971
        },
        {
          "position": {
            "x": 1386.100449516967,
            "y": 739.7413017852111
          },
          "velocity": {
            "x": 0.9234513321232001,
            "y": -0.033461151562632525
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 208.57361217258014,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 18162.333333333783,
          "totalLifespan": 43179
        },
        {
          "position": {
            "x": 1217.0727298360298,
            "y": 319.36937017906166
          },
          "velocity": {
            "x": 0.8124651066996178,
            "y": -0.005601133852129873
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 245.4396504642317,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11653.333333332874,
          "totalLifespan": 36620
        },
        {
          "position": {
            "x": 1246.0280879705667,
            "y": 975.0842959141188
          },
          "velocity": {
            "x": 0.833463603993691,
            "y": 0.006678434458121985
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 203.72010628874582,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 19114.333333333976,
          "totalLifespan": 44031
        },
        {
          "position": {
            "x": 1477.0770612662573,
            "y": 1193.030563012386
          },
          "velocity": {
            "x": 0.9899980303392817,
            "y": -0.05008352509853064
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 297.5569220541888,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 5218.33333333258,
          "totalLifespan": 30085
        },
        {
          "position": {
            "x": 1452.43749836196,
            "y": -109.01103830429011
          },
          "velocity": {
            "x": 0.9754449283827591,
            "y": 0.023625786143020588
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 240.76968684310214,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 12289.333333332921,
          "totalLifespan": 37106
        },
        {
          "position": {
            "x": 1105.8939235055623,
            "y": 857.7907465132537
          },
          "velocity": {
            "x": 0.7442085622513828,
            "y": 0.08486584959057919
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 221.87383351997084,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 15418.333333333256,
          "totalLifespan": 40185
        },
        {
          "position": {
            "x": 1228.919106278759,
            "y": -194.08044964208375
          },
          "velocity": {
            "x": 0.8286710089540138,
            "y": -0.0009059644521577603
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 272.76071362884926,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7905.333333332444,
          "totalLifespan": 32622
        },
        {
          "position": {
            "x": 1055.181587932922,
            "y": 780.1252783586364
          },
          "velocity": {
            "x": 0.7129605323871001,
            "y": 0.0825263323174148
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 214.30640023168175,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 16769.33333333343,
          "totalLifespan": 41436
        },
        {
          "position": {
            "x": 1081.5202187250304,
            "y": 86.7418857026094
          },
          "velocity": {
            "x": 0.7322411772004372,
            "y": 0.04068317991058089
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 267.008134980425,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8573.333333332486,
          "totalLifespan": 33190
        },
        {
          "position": {
            "x": 1181.6462644921028,
            "y": 217.28774273061123
          },
          "velocity": {
            "x": 0.8016596095604399,
            "y": -0.04146089058683045
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 225.51444526608537,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 14650.333333333141,
          "totalLifespan": 39217
        },
        {
          "position": {
            "x": 1257.9299344965593,
            "y": -373.92684109166174
          },
          "velocity": {
            "x": 0.8551529126421513,
            "y": -0.038354049809025764
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 248.4657395416985,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11005.333333332737,
          "totalLifespan": 35522
        },
        {
          "position": {
            "x": 1099.3221932702975,
            "y": 1272.6745278943504
          },
          "velocity": {
            "x": 0.7488570798844174,
            "y": -0.003416651291555752
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 201.88869533326735,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 19161.33333333392,
          "totalLifespan": 43628
        },
        {
          "position": {
            "x": 1388.9595252879058,
            "y": 1306.296502860389
          },
          "velocity": {
            "x": 0.9480952391043829,
            "y": 0.12381428704702516
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 223.70396762782346,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 14876.333333333145,
          "totalLifespan": 39293
        },
        {
          "position": {
            "x": 1464.3135185616025,
            "y": 951.6779281719557
          },
          "velocity": {
            "x": 1.0015824340366677,
            "y": -0.02823997060707174
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 237.32482008549755,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 12595.333333332888,
          "totalLifespan": 36962
        },
        {
          "position": {
            "x": 1520.366407736534,
            "y": 230.29739017302165
          },
          "velocity": {
            "x": 1.042060594747441,
            "y": 0.12357453939968094
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 246.48739969027787,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11198.333333332728,
          "totalLifespan": 35515
        },
        {
          "position": {
            "x": 1266.3473781664552,
            "y": 598.7616379051807
          },
          "velocity": {
            "x": 0.8697440784110164,
            "y": -0.05937145027904374
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 199.53861264018116,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 19514.33333333397,
          "totalLifespan": 43781
        },
        {
          "position": {
            "x": 1095.9964999686595,
            "y": -175.3702650444047
          },
          "velocity": {
            "x": 0.7542990364546992,
            "y": -0.05025033442281053
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 235.3798801231211,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 12821.333333332892,
          "totalLifespan": 37038
        },
        {
          "position": {
            "x": 1294.9037039057055,
            "y": 1383.4462477787847
          },
          "velocity": {
            "x": 0.8930370371763727,
            "y": 0.08038813659527903
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 255.98775966575295,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 9819.333333332557,
          "totalLifespan": 33986
        },
        {
          "position": {
            "x": 1010.8787233158333,
            "y": -2.7708692694141934
          },
          "velocity": {
            "x": 0.698603125995728,
            "y": 0.046043614235126804
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 208.50144092218864,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 17523.333333333514,
          "totalLifespan": 41640
        },
        {
          "position": {
            "x": 1151.303270917001,
            "y": 1043.9463058988085
          },
          "velocity": {
            "x": 0.7973014341530672,
            "y": 0.08811164952789204
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 202.6856314041044,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 18679.333333333758,
          "totalLifespan": 42746
        },
        {
          "position": {
            "x": 1246.0369693858809,
            "y": 492.3049389487112
          },
          "velocity": {
            "x": 0.8647029627938042,
            "y": 0.002923753059460934
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 201.73596528069058,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 18841.333333333787,
          "totalLifespan": 42858
        },
        {
          "position": {
            "x": 1134.4791943259554,
            "y": 1166.3373991704173
          },
          "velocity": {
            "x": 0.7889285078761727,
            "y": -0.03958691580490873
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 195.78388436315186,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 20102.333333334056,
          "totalLifespan": 44069
        },
        {
          "position": {
            "x": 1000.7281019827578,
            "y": 1273.9148452774346
          },
          "velocity": {
            "x": 0.6973714996395651,
            "y": 0.08015632031586951
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 228.1701338280147,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 13818.333333332957,
          "totalLifespan": 37735
        },
        {
          "position": {
            "x": 1299.7186938326047,
            "y": 79.72370187179934
          },
          "velocity": {
            "x": 0.9076247861959402,
            "y": 0.001919686520732879
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 264.1335423775806,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 8662.33333333244,
          "totalLifespan": 32529
        },
        {
          "position": {
            "x": 1029.235221916895,
            "y": 478.35137395262757
          },
          "velocity": {
            "x": 0.7202485807676156,
            "y": 0.016773144199626285
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 192.92126994126653,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 20626.333333334147,
          "totalLifespan": 44443
        },
        {
          "position": {
            "x": 1296.5164193535995,
            "y": -22.09783606341125
          },
          "velocity": {
            "x": 0.9091980500375885,
            "y": 0.008939121144295225
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 253.05373990713946,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10044.333333332523,
          "totalLifespan": 33811
        },
        {
          "position": {
            "x": 1025.700026031521,
            "y": 608.0421032388142
          },
          "velocity": {
            "x": 0.7208011426785133,
            "y": -0.07178002480857304
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 205.24038461538288,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 17883.333333333532,
          "totalLifespan": 41600
        },
        {
          "position": {
            "x": 1395.2723075674887,
            "y": 487.5223898374529
          },
          "velocity": {
            "x": 0.982586132089757,
            "y": 0.06223528959826279
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 281.1231728643636,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 6640.33333333259,
          "totalLifespan": 30307
        },
        {
          "position": {
            "x": 1380.0480701124955,
            "y": 1096.2722882420696
          },
          "velocity": {
            "x": 0.9739224206863301,
            "y": -0.052114293942540184
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 246.370512040345,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10892.333333332594,
          "totalLifespan": 34509
        },
        {
          "position": {
            "x": 1237.605383588272,
            "y": 952.4797653256196
          },
          "velocity": {
            "x": 0.8752513320992185,
            "y": -0.05543970312424091
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 205.70264765783998,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 17677.333333333467,
          "totalLifespan": 41244
        },
        {
          "position": {
            "x": 1466.2193246087922,
            "y": 373.26908311779135
          },
          "velocity": {
            "x": 1.0391348863279888,
            "y": 0.08325706755668094
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 275.290215588732,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 7236.333333332568,
          "totalLifespan": 30753
        },
        {
          "position": {
            "x": 1253.4628954865498,
            "y": 860.077916014809
          },
          "velocity": {
            "x": 0.8902435337262322,
            "y": -0.11683268610333694
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 254.97238402801807,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 9666.333333332437,
          "totalLifespan": 33133
        },
        {
          "position": {
            "x": 1021.2153342794669,
            "y": 1074.3690030304917
          },
          "velocity": {
            "x": 0.7268436542914519,
            "y": -0.09363491883111646
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 240.78146868127874,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 11594.33333333264,
          "totalLifespan": 35011
        },
        {
          "position": {
            "x": 1154.239128020406,
            "y": 934.2449558450137
          },
          "velocity": {
            "x": 0.8232804051500726,
            "y": 0.05166471599275254
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 232.24096518594746,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 12854.333333332772,
          "totalLifespan": 36221
        },
        {
          "position": {
            "x": 1303.4016737335119,
            "y": -483.99059201763924
          },
          "velocity": {
            "x": 0.931666671718031,
            "y": -0.0765110469306616
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 211.46240080614854,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 16378.333333333148,
          "totalLifespan": 39695
        },
        {
          "position": {
            "x": 1406.9223594298912,
            "y": 858.4792281914863
          },
          "velocity": {
            "x": 1.0078240397062144,
            "y": -0.11624126190046855
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 189.24536827834856,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 20993.333333334147,
          "totalLifespan": 44260
        },
        {
          "position": {
            "x": 1201.6222400344789,
            "y": 569.2563333643503
          },
          "velocity": {
            "x": 0.8626146733915727,
            "y": 0.0044840350987165305
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 203.94817110368132,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 17764.333333333434,
          "totalLifespan": 40981
        },
        {
          "position": {
            "x": 1048.6264490201654,
            "y": 276.8594302903851
          },
          "velocity": {
            "x": 0.7837267929896442,
            "y": 0.04461464943741598
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 181.42372881355215,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 21950.00000000088,
          "totalLifespan": 44250
        },
        {
          "position": {
            "x": 1275.5923610061693,
            "y": -214.0838846781346
          },
          "velocity": {
            "x": 0.9605364164203009,
            "y": 0.014520621873810582
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 206.68188420834522,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 16418.66666666632,
          "totalLifespan": 38552
        },
        {
          "position": {
            "x": 1139.4068098725347,
            "y": 1089.0422242491063
          },
          "velocity": {
            "x": 0.8908575526759641,
            "y": -0.11054753613079203
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 187.770681934961,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 19552.33333333355,
          "totalLifespan": 40869
        },
        {
          "position": {
            "x": 1050.3296758283996,
            "y": 1042.3397817307246
          },
          "velocity": {
            "x": 0.8342570896174641,
            "y": 0.02913105192740025
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 188.86416481236049,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 19013.666666666715,
          "totalLifespan": 39997
        },
        {
          "position": {
            "x": 1091.394338865854,
            "y": 691.9135464478607
          },
          "velocity": {
            "x": 0.8738145227108571,
            "y": -0.04015177887007988
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 182.14520088471642,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 20326.333333333645,
          "totalLifespan": 41143
        },
        {
          "position": {
            "x": 991.0282471981177,
            "y": 313.031967454059
          },
          "velocity": {
            "x": 0.801802788995231,
            "y": -0.10039527758806033
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 210.7716356401955,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 14584.999999999225,
          "totalLifespan": 35185
        },
        {
          "position": {
            "x": 1021.6016399532454,
            "y": -148.99259634777465
          },
          "velocity": {
            "x": 0.8298957270132067,
            "y": 0.08914431066138666
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 222.40958776236437,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 12692.333333332339,
          "totalLifespan": 33209
        },
        {
          "position": {
            "x": 1074.1743604898306,
            "y": 10.709656839293363
          },
          "velocity": {
            "x": 0.900397619857372,
            "y": -0.0007727969794728001
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 238.08415100616253,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10181.666666665898,
          "totalLifespan": 30065
        },
        {
          "position": {
            "x": 889.5332050584386,
            "y": 270.8752621847921
          },
          "velocity": {
            "x": 0.7481355803687558,
            "y": 0.057263301774668235
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 236.876182886751,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10300.333333332557,
          "totalLifespan": 30117
        },
        {
          "position": {
            "x": 1221.960950943851,
            "y": 1368.0308016991094
          },
          "velocity": {
            "x": 1.0303212065294076,
            "y": 0.06355047313706773
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 231.37701186799887,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 10988.333333332484,
          "totalLifespan": 30755
        },
        {
          "position": {
            "x": 1080.2870997184207,
            "y": 416.8250263675825
          },
          "velocity": {
            "x": 0.9361240032222238,
            "y": 0.10992625474528053
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 154.11667816679386,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 25693.66666666792,
          "totalLifespan": 44927
        },
        {
          "position": {
            "x": 1015.8636290925156,
            "y": 1287.6397018849034
          },
          "velocity": {
            "x": 0.8833596774717662,
            "y": 0.021126265176659043
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 192.18985014763123,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 16735.333333332623,
          "totalLifespan": 35902
        },
        {
          "position": {
            "x": 1165.5990445587477,
            "y": 1317.3393012927434
          },
          "velocity": {
            "x": 1.0162153832247312,
            "y": 0.03693382065447905
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 186.19122341865085,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 17845.333333332856,
          "totalLifespan": 36962
        },
        {
          "position": {
            "x": 987.5460954510654,
            "y": 302.8370398369202
          },
          "velocity": {
            "x": 0.8632395939257644,
            "y": -0.071952421822233
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 178.75465506914392,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 19332.333333333172,
          "totalLifespan": 38399
        },
        {
          "position": {
            "x": 930.1477652686838,
            "y": 329.29354038636507
          },
          "velocity": {
            "x": 0.8224118172136762,
            "y": 0.09006824977105442
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 194.5918045479401,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 16022.999999999127,
          "totalLifespan": 34873
        },
        {
          "position": {
            "x": 1134.285257327247,
            "y": 493.2641522156306
          },
          "velocity": {
            "x": 1.0145664197918276,
            "y": 0.005121028094210568
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 212.0101137800365,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 13006.66666666568,
          "totalLifespan": 31640
        },
        {
          "position": {
            "x": 914.0263014890904,
            "y": -206.19488929726793
          },
          "velocity": {
            "x": 0.8197545304834982,
            "y": -0.023636017078432315
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 175.49842602308672,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 19536.666666666482,
          "totalLifespan": 38120
        },
        {
          "position": {
            "x": 1155.0759019668524,
            "y": -11.192280641236666
          },
          "velocity": {
            "x": 1.0396722789980546,
            "y": -0.07111621198657372
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 153.0619273954591,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 25034.333333334336,
          "totalLifespan": 43551
        },
        {
          "position": {
            "x": 1116.1268001992858,
            "y": 28.259143068701405
          },
          "velocity": {
            "x": 1.0091562388782092,
            "y": -0.042907824005170896
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 158.76357720464554,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 23364.666666667294,
          "totalLifespan": 41798
        },
        {
          "position": {
            "x": 1136.94785518715,
            "y": 666.5752402162516
          },
          "velocity": {
            "x": 1.0335889592610534,
            "y": -0.0793588528185948
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 166.68771309508637,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 21261.66666666682,
          "totalLifespan": 39595
        },
        {
          "position": {
            "x": 1061.2832486283535,
            "y": 192.60533305489054
          },
          "velocity": {
            "x": 0.9674414299255865,
            "y": -0.10714777802188984
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 206.0996993988092,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 13652.666666665635,
          "totalLifespan": 31936
        },
        {
          "position": {
            "x": 1137.4816877470023,
            "y": 475.81701656435854
          },
          "velocity": {
            "x": 1.0397456012312358,
            "y": -0.07863683452733806
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 158.43209191184854,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 23197.666666667228,
          "totalLifespan": 41431
        },
        {
          "position": {
            "x": 907.3837803402204,
            "y": 252.54869526013636
          },
          "velocity": {
            "x": 0.8401701669816714,
            "y": 0.04468645289789154
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 196.2625314232183,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 15016.999999998892,
          "totalLifespan": 33017
        },
        {
          "position": {
            "x": 844.4021502429938,
            "y": 753.3139772746853
          },
          "velocity": {
            "x": 0.7862217413808101,
            "y": 0.07028146220751795
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 150.23780658397075,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 24992.000000000906,
          "totalLifespan": 42892
        },
        {
          "position": {
            "x": 811.2639708540255,
            "y": 261.723456225122
          },
          "velocity": {
            "x": 0.7603223719344097,
            "y": 0.03193829086553283
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 192.5934839505548,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 15457.666666665576,
          "totalLifespan": 33241
        },
        {
          "position": {
            "x": 900.6040347791024,
            "y": 849.841101935811
          },
          "velocity": {
            "x": 0.8464323635142044,
            "y": -0.06143615194179265
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 152.61773846521046,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 24096.666666667352,
          "totalLifespan": 41830
        },
        {
          "position": {
            "x": 1031.3696054865222,
            "y": 1225.337758015375
          },
          "velocity": {
            "x": 0.9720731437196186,
            "y": 0.07622120666086903
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 166.75834970530553,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 20491.66666666656,
          "totalLifespan": 38175
        },
        {
          "position": {
            "x": 831.8608010582507,
            "y": 1266.260733298688
          },
          "velocity": {
            "x": 0.7870017039340089,
            "y": 0.09186698114071977
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 159.86488870963473,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 22054.333333333558,
          "totalLifespan": 39671
        },
        {
          "position": {
            "x": 877.9114489444356,
            "y": 432.41652943135244
          },
          "velocity": {
            "x": 0.851514499461159,
            "y": -0.05786638087389598
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 190.3970452447032,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 15306.666666665535,
          "totalLifespan": 32490
        },
        {
          "position": {
            "x": 866.8396022235142,
            "y": 826.8107020131653
          },
          "velocity": {
            "x": 0.8490103841562282,
            "y": -0.0812265797606563
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 197.05352547607933,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 14071.333333332348,
          "totalLifespan": 31088
        },
        {
          "position": {
            "x": 860.6732772151832,
            "y": -209.94099753706203
          },
          "velocity": {
            "x": 0.8462864082745075,
            "y": -0.08211639215258786
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 165.94599004650755,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 19820.99999999964,
          "totalLifespan": 36771
        },
        {
          "position": {
            "x": 1041.7815757372978,
            "y": -276.9883235221089
          },
          "velocity": {
            "x": 1.0273980036857127,
            "y": 0.01297369253026679
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 179.67573314433588,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 16960.999999999007,
          "totalLifespan": 33861
        },
        {
          "position": {
            "x": 799.0840453890858,
            "y": 43.76314160132665
          },
          "velocity": {
            "x": 0.7903897580505164,
            "y": 0.017138469616310312
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 170.39804488890755,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 18748.99999999939,
          "totalLifespan": 35599
        },
        {
          "position": {
            "x": 971.7884937983862,
            "y": 735.391644772691
          },
          "velocity": {
            "x": 0.9698487962059812,
            "y": -0.0682720348479939
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 176.54832173377784,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 17352.999999999065,
          "totalLifespan": 34053
        },
        {
          "position": {
            "x": 981.0418746680386,
            "y": 343.73583575079124
          },
          "velocity": {
            "x": 0.9820238985666228,
            "y": -0.08148329795232974
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 144.43025469265203,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 24851.00000000069,
          "totalLifespan": 41501
        },
        {
          "position": {
            "x": 873.6342996307586,
            "y": -112.67772472545064
          },
          "velocity": {
            "x": 0.8771428711152373,
            "y": -0.11153077309539004
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 170.7331009656665,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 18401.99999999928,
          "totalLifespan": 35002
        },
        {
          "position": {
            "x": 975.6663844406494,
            "y": 349.2744280734774
          },
          "velocity": {
            "x": 0.9825441937972186,
            "y": 0.10173759363924287
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 159.4369664695355,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 20818.9999999998,
          "totalLifespan": 37369
        },
        {
          "position": {
            "x": 904.4979735267899,
            "y": -242.84908402355694
          },
          "velocity": {
            "x": 0.9164113206958486,
            "y": -0.021547864876583167
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 150.23974427277344,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 22967.00000000025,
          "totalLifespan": 39417
        },
        {
          "position": {
            "x": 760.5051854530244,
            "y": 610.3513004449864
          },
          "velocity": {
            "x": 0.7840259643845539,
            "y": 0.05737205568009482
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 137.351615415469,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 26206.333333334253,
          "totalLifespan": 42373
        },
        {
          "position": {
            "x": 834.540941070991,
            "y": -165.02728570465948
          },
          "velocity": {
            "x": 0.8630206215832239,
            "y": 0.050740220385629815
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 186.82981806473566,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 14938.333333332319,
          "totalLifespan": 31055
        },
        {
          "position": {
            "x": 860.7518448338722,
            "y": 260.5067998677698
          },
          "velocity": {
            "x": 0.8938233072002986,
            "y": -0.01028723900684747
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 192.27313566937295,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 14000.999999999092,
          "totalLifespan": 30051
        },
        {
          "position": {
            "x": 702.960384086949,
            "y": 633.1490611647973
          },
          "velocity": {
            "x": 0.739958299038879,
            "y": -0.09072733157251911
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 141.05419450630575,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 24576.66666666718,
          "totalLifespan": 40410
        },
        {
          "position": {
            "x": 718.6187831368892,
            "y": -363.51708452119084
          },
          "velocity": {
            "x": 0.7588371522036912,
            "y": 0.06028231780627328
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 180.41531720328908,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 15710.666666665593,
          "totalLifespan": 31494
        },
        {
          "position": {
            "x": 662.8113407915386,
            "y": 806.5387141657997
          },
          "velocity": {
            "x": 0.7173282908999323,
            "y": 0.08559621404455152
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 145.11949323351504,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 22803.000000000065,
          "totalLifespan": 38203
        },
        {
          "position": {
            "x": 953.1375261778176,
            "y": 239.38678611586707
          },
          "velocity": {
            "x": 1.0428200505227683,
            "y": -0.07753156641208411
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 128.97460018813814,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27286.666666667687,
          "totalLifespan": 42520
        },
        {
          "position": {
            "x": 719.3206004281866,
            "y": -188.68389705382106
          },
          "velocity": {
            "x": 0.7904621982727222,
            "y": 0.058225981933888685
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 129.06580937971938,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27137.33333333431,
          "totalLifespan": 42304
        },
        {
          "position": {
            "x": 824.6473319432253,
            "y": 1039.4050777645461
          },
          "velocity": {
            "x": 0.9142431617995697,
            "y": -0.03953341549745105
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 161.4895712111818,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 18479.666666665733,
          "totalLifespan": 33513
        },
        {
          "position": {
            "x": 790.8377937097009,
            "y": -348.2498968800137
          },
          "velocity": {
            "x": 0.89158714059719,
            "y": 0.0864741752329657
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 165.58290034536535,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 17357.66666666559,
          "totalLifespan": 32141
        },
        {
          "position": {
            "x": 769.4327585533995,
            "y": -83.25839626277948
          },
          "velocity": {
            "x": 0.8723727421240275,
            "y": -0.032600939722397235
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 157.73942591434394,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 18848.999999999098,
          "totalLifespan": 33549
        },
        {
          "position": {
            "x": 642.7029030279382,
            "y": 212.4600233778093
          },
          "velocity": {
            "x": 0.7336791130456024,
            "y": 0.014913280782668048
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 150.93472704822162,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 20222.999999999385,
          "totalLifespan": 34823
        },
        {
          "position": {
            "x": 698.9849600841056,
            "y": -491.4673824668202
          },
          "velocity": {
            "x": 0.8025085649645243,
            "y": -0.07010393566959439
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 147.92380197571907,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 20812.333333332834,
          "totalLifespan": 35329
        },
        {
          "position": {
            "x": 794.3252602049786,
            "y": 675.5886942446425
          },
          "velocity": {
            "x": 0.9151212675172395,
            "y": -0.09542127733586629
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 123.0158730158642,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27869.33333333437,
          "totalLifespan": 42336
        },
        {
          "position": {
            "x": 644.5938653526669,
            "y": 728.3996044446859
          },
          "velocity": {
            "x": 0.7451952200608892,
            "y": 0.03626197925707205
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 120.82974413893274,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 28536.333333334507,
          "totalLifespan": 42953
        },
        {
          "position": {
            "x": 787.6992891940582,
            "y": 899.859748559894
          },
          "velocity": {
            "x": 0.9148656088200571,
            "y": -0.09753664684634858
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 139.1215360999659,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 22782.999999999905,
          "totalLifespan": 37133
        },
        {
          "position": {
            "x": 810.8319180447188,
            "y": 695.6286183898611
          },
          "velocity": {
            "x": 0.9561697146753584,
            "y": -0.03310565349294899
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 142.28585810565554,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 21625.66666666629,
          "totalLifespan": 35759
        },
        {
          "position": {
            "x": 804.7522926334265,
            "y": 877.4891819185143
          },
          "velocity": {
            "x": 0.9719230587360123,
            "y": 0.11617000285454424
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 127.4794077647449,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 25171.00000000035,
          "totalLifespan": 38971
        },
        {
          "position": {
            "x": 587.7672924649539,
            "y": 657.270979080827
          },
          "velocity": {
            "x": 0.7167893810548368,
            "y": -0.016804969519141157
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 145.55351754334882,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 20135.333333332565,
          "totalLifespan": 33802
        },
        {
          "position": {
            "x": 707.8213678837902,
            "y": -405.2787654502192
          },
          "velocity": {
            "x": 0.8684924759310461,
            "y": -0.05515947928416386
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 111.22483793925798,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 30381.66666666812,
          "totalLifespan": 43965
        },
        {
          "position": {
            "x": 586.997780625032,
            "y": 1124.9340242906023
          },
          "velocity": {
            "x": 0.7237950439272858,
            "y": -0.075151737886995
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 135.55827947403915,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 22379.33333333303,
          "totalLifespan": 35896
        },
        {
          "position": {
            "x": 789.7065399600414,
            "y": -285.9614593713645
          },
          "velocity": {
            "x": 0.984671496209516,
            "y": 0.10003560719645896
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 116.24592342069508,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 28028.33333333424,
          "totalLifespan": 41395
        },
        {
          "position": {
            "x": 666.3653311682444,
            "y": -339.528238766768
          },
          "velocity": {
            "x": 0.8339991629139428,
            "y": 0.056135218199885435
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 146.78056397539416,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 19344.333333332364,
          "totalLifespan": 32661
        },
        {
          "position": {
            "x": 769.00135992232,
            "y": -151.1829629632863
          },
          "velocity": {
            "x": 0.9660821104551733,
            "y": 0.1250838200055987
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 115.88014072545639,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27948.33333333421,
          "totalLifespan": 41215
        },
        {
          "position": {
            "x": 630.6192046105381,
            "y": 498.41886850143953
          },
          "velocity": {
            "x": 0.7952322882856886,
            "y": 0.031340233016528316
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 147.66767015301653,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 19004.33333333237,
          "totalLifespan": 32221
        },
        {
          "position": {
            "x": 542.7062604142793,
            "y": -19.28140718284648
          },
          "velocity": {
            "x": 0.7029873839563152,
            "y": 0.009807767789392595
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 109.70584055704595,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29355.33333333446,
          "totalLifespan": 42222
        },
        {
          "position": {
            "x": 702.6347210426279,
            "y": -12.088553222863357
          },
          "velocity": {
            "x": 0.9136992471295485,
            "y": -0.06176783569708561
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 119.58944585557722,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 25765.333333333667,
          "totalLifespan": 38582
        },
        {
          "position": {
            "x": 708.6799887341438,
            "y": -383.95898554010637
          },
          "velocity": {
            "x": 0.9300262319345849,
            "y": -0.07531039902890403
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 125.15055293988937,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 23831.999999999894,
          "totalLifespan": 36532
        },
        {
          "position": {
            "x": 584.7141735244624,
            "y": 581.3145132502349
          },
          "velocity": {
            "x": 0.7785807903121946,
            "y": 0.07628192145078701
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 146.58425504230087,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 18223.333333332423,
          "totalLifespan": 30740
        },
        {
          "position": {
            "x": 764.139164228391,
            "y": 140.5160010308271
          },
          "velocity": {
            "x": 1.0229439949509858,
            "y": -0.12138217963849597
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 137.05164663793312,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 20252.999999999094,
          "totalLifespan": 32703
        },
        {
          "position": {
            "x": 700.4420149080129,
            "y": 1263.3696878840235
          },
          "velocity": {
            "x": 0.9529823332081713,
            "y": 0.04601733300675961
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 99.27960378206677,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 32170.00000000165,
          "totalLifespan": 44420
        },
        {
          "position": {
            "x": 757.9074466002066,
            "y": 1078.561885499048
          },
          "velocity": {
            "x": 1.035392686612294,
            "y": -0.02572895024340236
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 102.9801402142968,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 30449.000000001266,
          "totalLifespan": 42649
        },
        {
          "position": {
            "x": 581.6045123248788,
            "y": 652.8728598677067
          },
          "velocity": {
            "x": 0.7978114023660828,
            "y": 0.041610910457939736
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 130.12048192771837,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 21464.999999999298,
          "totalLifespan": 33615
        },
        {
          "position": {
            "x": 709.0088310036549,
            "y": -92.59175231835266
          },
          "velocity": {
            "x": 0.9765961859554392,
            "y": 0.10250408817317883
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 134.62727160342183,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 20255.99999999912,
          "totalLifespan": 32356
        },
        {
          "position": {
            "x": 665.0296908214835,
            "y": 1083.9547279090023
          },
          "velocity": {
            "x": 0.9198197660048067,
            "y": 0.11967392361398473
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 130.82815610110038,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 21107.999999999207,
          "totalLifespan": 33158
        },
        {
          "position": {
            "x": 561.7300482822541,
            "y": 516.8916047821131
          },
          "velocity": {
            "x": 0.7801806226142479,
            "y": -0.031630603235287796
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 108.19746036516023,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27927.000000000688,
          "totalLifespan": 39927
        },
        {
          "position": {
            "x": 680.1929052141807,
            "y": 195.34596729456308
          },
          "velocity": {
            "x": 0.9486651397687323,
            "y": 0.01004983333707173
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 100.99302767799469,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 30647.000000001273,
          "totalLifespan": 42597
        },
        {
          "position": {
            "x": 559.1476103693941,
            "y": 983.0813139607648
          },
          "velocity": {
            "x": 0.7842182473624045,
            "y": -0.021687276986162046
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 95.13220218371276,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 33085.666666668396,
          "totalLifespan": 44969
        },
        {
          "position": {
            "x": 719.1332901170035,
            "y": 3.8321141565601406
          },
          "velocity": {
            "x": 1.0128637888971794,
            "y": -0.09300555430851973
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 95.28922292308374,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 32872.66666666839,
          "totalLifespan": 44706
        },
        {
          "position": {
            "x": 716.7071235107516,
            "y": -398.0948684402388
          },
          "velocity": {
            "x": 1.0137300191099825,
            "y": 0.03785449119122222
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 100.41425020711483,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 30461.666666667876,
          "totalLifespan": 42245
        },
        {
          "position": {
            "x": 520.7217763165895,
            "y": 37.68723049105233
          },
          "velocity": {
            "x": 0.7396616140860724,
            "y": -0.013875777437869963
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 120.94488188976777,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 23191.666666666282,
          "totalLifespan": 34925
        },
        {
          "position": {
            "x": 663.3642983021671,
            "y": 350.8979862097866
          },
          "velocity": {
            "x": 0.9572356396856493,
            "y": 0.10027855354098164
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 104.7566260203507,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 28142.00000000067,
          "totalLifespan": 39692
        },
        {
          "position": {
            "x": 658.8499262532974,
            "y": 1250.1855619408966
          },
          "velocity": {
            "x": 0.9548549655844971,
            "y": 0.020396647035230017
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 105.22570150467126,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27844.000000000597,
          "totalLifespan": 39344
        },
        {
          "position": {
            "x": 533.2848325078755,
            "y": 1320.8255583090909
          },
          "velocity": {
            "x": 0.7762515757028841,
            "y": 0.08287708971871227
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 129.31764705883293,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 20424.999999999167,
          "totalLifespan": 31875
        },
        {
          "position": {
            "x": 626.7326398384422,
            "y": 1355.2334776077496
          },
          "velocity": {
            "x": 0.9162757892374885,
            "y": 0.09390328270930812
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 99.56090342300365,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29821.000000001015,
          "totalLifespan": 41221
        },
        {
          "position": {
            "x": 667.0655771218342,
            "y": -370.7849546833838
          },
          "velocity": {
            "x": 0.9853258155418672,
            "y": -0.08431503575633953
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 123.48381212951168,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 21611.66666666587,
          "totalLifespan": 32895
        },
        {
          "position": {
            "x": 596.2300774903059,
            "y": 137.25467589393213
          },
          "velocity": {
            "x": 0.8898956380452363,
            "y": -0.1071963808796641
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 89.80831955675382,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 33595.33333333496,
          "totalLifespan": 44762
        },
        {
          "position": {
            "x": 586.7784818529321,
            "y": 196.77529588463244
          },
          "velocity": {
            "x": 0.8837025329110431,
            "y": -0.0240159560944441
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 92.26066416561235,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 32115.3333333348,
          "totalLifespan": 43182
        },
        {
          "position": {
            "x": 596.6296546633866,
            "y": 818.6192837474858
          },
          "velocity": {
            "x": 0.9039843252475627,
            "y": -0.06763335086548565
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 110.10704851939491,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 24964.999999999894,
          "totalLifespan": 35965
        },
        {
          "position": {
            "x": 646.9108646227429,
            "y": -380.2668775192035
          },
          "velocity": {
            "x": 0.9876501749965528,
            "y": -0.1289122549730897
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 99.89832231824528,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 28423.333333333972,
          "totalLifespan": 39340
        },
        {
          "position": {
            "x": 532.0225896614952,
            "y": 1096.6651498351562
          },
          "velocity": {
            "x": 0.815985566965487,
            "y": 0.07845788950067834
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 92.75197382458555,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 31310.333333334594,
          "totalLifespan": 42177
        },
        {
          "position": {
            "x": 537.4232179122342,
            "y": 917.2395768590295
          },
          "velocity": {
            "x": 0.8280789182006667,
            "y": -0.009119149331235534
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 89.68423961858741,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 32602.33333333487,
          "totalLifespan": 43419
        },
        {
          "position": {
            "x": 636.5181711434535,
            "y": 160.73317559933082
          },
          "velocity": {
            "x": 0.985322246352084,
            "y": -0.02990854543901051
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 113.56577790800398,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 23363.333333332845,
          "totalLifespan": 34130
        },
        {
          "position": {
            "x": 534.6132739488303,
            "y": 134.3126121206519
          },
          "velocity": {
            "x": 0.8314358848348797,
            "y": -0.04621798070488422
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 92.57570667561504,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 30957.333333334496,
          "totalLifespan": 41674
        },
        {
          "position": {
            "x": 540.8793260540622,
            "y": 80.82357872039165
          },
          "velocity": {
            "x": 0.8451239469594795,
            "y": -0.03532428019946454
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 86.98212789089723,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 33480.333333334886,
          "totalLifespan": 44147
        },
        {
          "position": {
            "x": 643.7233438166844,
            "y": -149.2270246217304
          },
          "velocity": {
            "x": 1.010554699869214,
            "y": 0.12841099635247263
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 101.37931034482472,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27083.333333333634,
          "totalLifespan": 37700
        },
        {
          "position": {
            "x": 600.8904408420074,
            "y": 414.29592254202987
          },
          "velocity": {
            "x": 0.947776720570992,
            "y": -0.11673489233484348
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 108.27427205191961,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 24566.333333333077,
          "totalLifespan": 35133
        },
        {
          "position": {
            "x": 544.7028096139752,
            "y": -274.2798140094164
          },
          "velocity": {
            "x": 0.8632374161869744,
            "y": -0.10258997029932442
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 92.48131320532593,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 30421.33333333435,
          "totalLifespan": 40938
        },
        {
          "position": {
            "x": 647.8612019009352,
            "y": -297.5425164863434
          },
          "velocity": {
            "x": 1.0316261176766592,
            "y": 0.12118037570557405
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 124.82607831445947,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 19719.33333333257,
          "totalLifespan": 30186
        },
        {
          "position": {
            "x": 562.1678337788684,
            "y": 790.5018165775783
          },
          "velocity": {
            "x": 0.899468534046182,
            "y": 0.0014835277955877507
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 113.77082006007885,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 22544.333333332615,
          "totalLifespan": 32961
        },
        {
          "position": {
            "x": 604.3563684199205,
            "y": 1139.662528418365
          },
          "velocity": {
            "x": 0.9716340328294486,
            "y": 0.08020710261142958
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 83.88590438084594,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 34122.33333333484,
          "totalLifespan": 44489
        },
        {
          "position": {
            "x": 642.8838648205533,
            "y": -105.93305616974857
          },
          "velocity": {
            "x": 1.0385845958328819,
            "y": 0.04453111794937182
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 86.01403460014035,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 32862.333333334835,
          "totalLifespan": 43179
        },
        {
          "position": {
            "x": 618.5510420257414,
            "y": 349.23743817339084
          },
          "velocity": {
            "x": 1.0041413019898429,
            "y": 0.04454750619552315
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 86.20006063855857,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 32610.33333333479,
          "totalLifespan": 42877
        },
        {
          "position": {
            "x": 480.491695504707,
            "y": 628.025017033881
          },
          "velocity": {
            "x": 0.7838363711332819,
            "y": 0.04527206663551558
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 92.36564540431226,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29603.33333333413,
          "totalLifespan": 39820
        },
        {
          "position": {
            "x": 470.6731860641087,
            "y": -98.71773031760637
          },
          "velocity": {
            "x": 0.7715953869903498,
            "y": 0.020693965002100932
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 92.26813220056283,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29500.333333334096,
          "totalLifespan": 39667
        },
        {
          "position": {
            "x": 520.3221177948224,
            "y": 631.9733303933716
          },
          "velocity": {
            "x": 0.857202829975,
            "y": -0.02880719963856142
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 120.61599602584087,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 20078.333333332597,
          "totalLifespan": 30195
        },
        {
          "position": {
            "x": 507.32867872582176,
            "y": 325.18267390395715
          },
          "velocity": {
            "x": 0.8441408963824097,
            "y": 0.07437581974044669
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 99.94733778652409,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 26062.333333333325,
          "totalLifespan": 36079
        },
        {
          "position": {
            "x": 419.32287441591154,
            "y": -5.222222059930417
          },
          "velocity": {
            "x": 0.701208820093501,
            "y": -0.07653702347600824
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 97.54506157735767,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 26816.33333333348,
          "totalLifespan": 36783
        },
        {
          "position": {
            "x": 416.8744347638497,
            "y": 658.0452599141466
          },
          "velocity": {
            "x": 0.7029923014567461,
            "y": 0.05003951939085395
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 98.09760132340733,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 26386.66666666671,
          "totalLifespan": 36270
        },
        {
          "position": {
            "x": 429.0778318711686,
            "y": 1032.0483980812592
          },
          "velocity": {
            "x": 0.7272505624935005,
            "y": -0.05205008316473124
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 95.0846091861377,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27396.666666666923,
          "totalLifespan": 37230
        },
        {
          "position": {
            "x": 450.47814892017936,
            "y": 184.36583877938315
          },
          "velocity": {
            "x": 0.7674244444977554,
            "y": -0.021208913025719124
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 103.56082213532181,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 24225.666666666224,
          "totalLifespan": 34009
        },
        {
          "position": {
            "x": 434.59158763882755,
            "y": 464.3083251987948
          },
          "velocity": {
            "x": 0.7441636774637432,
            "y": -0.06188302502460742
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 110.50490397048961,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 21975.66666666596,
          "totalLifespan": 31709
        },
        {
          "position": {
            "x": 575.771706119746,
            "y": 692.0997935693057
          },
          "velocity": {
            "x": 0.9910012153523977,
            "y": 0.09449903363447314
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 90.49609304015479,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 28837.666666667217,
          "totalLifespan": 38521
        },
        {
          "position": {
            "x": 495.1597887450083,
            "y": 765.3219161408651
          },
          "velocity": {
            "x": 0.8566778351989679,
            "y": -0.04824770289322959
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 77.8783319485189,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 34897.66666666807,
          "totalLifespan": 44531
        },
        {
          "position": {
            "x": 450.1828353714801,
            "y": 1219.5074307738387
          },
          "velocity": {
            "x": 0.7829266702112667,
            "y": -0.06616557257528208
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 105.00684827272087,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 23271.666666665988,
          "totalLifespan": 32855
        },
        {
          "position": {
            "x": 527.3700561184459,
            "y": -148.0870471584534
          },
          "velocity": {
            "x": 0.9219756225847042,
            "y": 0.08954146273227315
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 103.33925506609904,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 23677.666666666068,
          "totalLifespan": 33211
        },
        {
          "position": {
            "x": 550.8295095452147,
            "y": 1078.773777822937
          },
          "velocity": {
            "x": 0.9680659218720795,
            "y": 0.027913093176497185
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 107.54788306452394,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 22260.666666665977,
          "totalLifespan": 31744
        },
        {
          "position": {
            "x": 529.6830893755672,
            "y": 1070.4046583662673
          },
          "velocity": {
            "x": 0.9358358469533049,
            "y": -0.0013903429006449943
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 93.66208836670455,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 26824.66666666674,
          "totalLifespan": 36258
        },
        {
          "position": {
            "x": 407.5007786444222,
            "y": 289.29257192292715
          },
          "velocity": {
            "x": 0.72380244874675,
            "y": 0.011593240080139502
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 78.53622244953749,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 33628.66666666803,
          "totalLifespan": 43012
        },
        {
          "position": {
            "x": 503.39504777519187,
            "y": 356.1165181178977
          },
          "velocity": {
            "x": 0.8989197281699942,
            "y": -0.020165975697873536
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 110.18561028399833,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 21160.666666665988,
          "totalLifespan": 30494
        },
        {
          "position": {
            "x": 570.169035514848,
            "y": 794.8278953807848
          },
          "velocity": {
            "x": 1.02364279266581,
            "y": -0.012847978254584266
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 79.99234064959751,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 32495.666666667956,
          "totalLifespan": 41779
        },
        {
          "position": {
            "x": 555.6352397165593,
            "y": -372.492506410199
          },
          "velocity": {
            "x": 1.0029516962392717,
            "y": 0.08438251473477536
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 95.22445354800107,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 25673.66666666646,
          "totalLifespan": 34907
        },
        {
          "position": {
            "x": 500.9312932077093,
            "y": 374.16347499149
          },
          "velocity": {
            "x": 0.9091312036437462,
            "y": -0.08622420961391893
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 102.56887565153386,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 23048.666666666,
          "totalLifespan": 32232
        },
        {
          "position": {
            "x": 543.9401396418081,
            "y": -227.35074149223362
          },
          "velocity": {
            "x": 0.9925914956967339,
            "y": 0.004143230960361818
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 78.0793616869588,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 32977.666666667996,
          "totalLifespan": 42111
        },
        {
          "position": {
            "x": 413.72520154894715,
            "y": -377.3552498297898
          },
          "velocity": {
            "x": 0.7591288101815581,
            "y": 0.06613844561996088
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 105.5145042109076,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 21907.666666666006,
          "totalLifespan": 30991
        },
        {
          "position": {
            "x": 406.0152765811702,
            "y": 82.30932249471724
          },
          "velocity": {
            "x": 0.7491056763490319,
            "y": -0.034011962909526516
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 104.57264132742418,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 22064.66666666601,
          "totalLifespan": 31098
        },
        {
          "position": {
            "x": 460.32199766607494,
            "y": 892.4249326984516
          },
          "velocity": {
            "x": 0.8540296802710023,
            "y": 0.06549333022926536
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 82.7808636445015,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 30083.666666667385,
          "totalLifespan": 39067
        },
        {
          "position": {
            "x": 533.3052864418497,
            "y": 242.92479370397393
          },
          "velocity": {
            "x": 0.9949725493318173,
            "y": -0.10903702923534614
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 104.49701065766291,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 21842.666666666017,
          "totalLifespan": 30776
        },
        {
          "position": {
            "x": 456.9500907470552,
            "y": 807.2786598919835
          },
          "velocity": {
            "x": 0.8573172434278651,
            "y": 0.015817984114320734
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 73.21931451334876,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 34793.66666666796,
          "totalLifespan": 43677
        },
        {
          "position": {
            "x": 491.66222627120044,
            "y": 153.17672543403768
          },
          "velocity": {
            "x": 0.927664577870191,
            "y": -0.10265692726572614
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 84.65326766936926,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 28731.666666667068,
          "totalLifespan": 37565
        },
        {
          "position": {
            "x": 462.4965538998018,
            "y": -256.3007263150339
          },
          "velocity": {
            "x": 0.8776025690698254,
            "y": 0.029030643941272916
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 91.4639437679005,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 25787.66666666642,
          "totalLifespan": 34571
        },
        {
          "position": {
            "x": 459.6446921321164,
            "y": 381.0350565977542
          },
          "velocity": {
            "x": 0.8771845269696834,
            "y": 0.009114942498244917
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 84.69371262323926,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 28388.66666666698,
          "totalLifespan": 37122
        },
        {
          "position": {
            "x": 501.3689215290724,
            "y": 1280.1812929609716
          },
          "velocity": {
            "x": 0.9623203868120312,
            "y": 0.11587517625919576
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 88.48004528729206,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 26646.66666666659,
          "totalLifespan": 35330
        },
        {
          "position": {
            "x": 518.841285436376,
            "y": 1216.5010209414027
          },
          "velocity": {
            "x": 1.001624103159018,
            "y": 0.018593176926330047
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 81.58122686825232,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29463.6666666672,
          "totalLifespan": 38097
        },
        {
          "position": {
            "x": 358.5811645400431,
            "y": -217.98718334307367
          },
          "velocity": {
            "x": 0.6962741059029887,
            "y": -0.07391474581763133
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 85.70953067790879,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27468.66666666676,
          "totalLifespan": 36052
        },
        {
          "position": {
            "x": 387.53657267731563,
            "y": 365.7317500957138
          },
          "velocity": {
            "x": 0.7569073685103768,
            "y": -0.01996087475960207
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 87.12669105760313,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 26725.666666666588,
          "totalLifespan": 35259
        },
        {
          "position": {
            "x": 466.55692004124666,
            "y": 638.1977182167068
          },
          "velocity": {
            "x": 0.9166147741478365,
            "y": 0.06658245639754504
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 94.62139050688506,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 23792.66666666605,
          "totalLifespan": 32276
        },
        {
          "position": {
            "x": 394.04149137678843,
            "y": 23.132558970388587
          },
          "velocity": {
            "x": 0.7787381252505673,
            "y": 0.001191093939189259
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 88.59577448348614,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 25834.66666666638,
          "totalLifespan": 34268
        },
        {
          "position": {
            "x": 463.08861317056574,
            "y": -120.44194382751823
          },
          "velocity": {
            "x": 0.9206533065021226,
            "y": 0.03160899528244003
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 74.56638829865136,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 32090.666666667737,
          "totalLifespan": 40474
        },
        {
          "position": {
            "x": 387.57573208158635,
            "y": 1003.6562766801734
          },
          "velocity": {
            "x": 0.7751514641631703,
            "y": 0.03434440149778213
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 91.21590805437108,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 24555.666666666086,
          "totalLifespan": 32889
        },
        {
          "position": {
            "x": 420.2868455500646,
            "y": 92.11455589322661
          },
          "velocity": {
            "x": 0.8456475765594845,
            "y": 0.05636137070535164
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 71.32094424911065,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 33527.66666666787,
          "totalLifespan": 41811
        },
        {
          "position": {
            "x": 450.7850114022041,
            "y": 774.0784519724689
          },
          "velocity": {
            "x": 0.912520265996369,
            "y": 0.042752303348368895
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 96.99270264080025,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 22325.666666666068,
          "totalLifespan": 30559
        },
        {
          "position": {
            "x": 422.2927743671901,
            "y": -371.27173800443336
          },
          "velocity": {
            "x": 0.860066750238681,
            "y": 0.04225679397190698
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 75.31830035280763,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 30930.666666667454,
          "totalLifespan": 39114
        },
        {
          "position": {
            "x": 375.9860063009351,
            "y": -37.51104599896712
          },
          "velocity": {
            "x": 0.7704631276658556,
            "y": -0.07044862803232838
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 88.6064457557934,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 24911.666666666133,
          "totalLifespan": 33045
        },
        {
          "position": {
            "x": 487.71198292754923,
            "y": 460.7728240193004
          },
          "velocity": {
            "x": 1.0055917173763984,
            "y": -0.11508449284493044
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 92.00126462220084,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 23546.66666666608,
          "totalLifespan": 31630
        },
        {
          "position": {
            "x": 477.22086805183494,
            "y": -296.2224809080724
          },
          "velocity": {
            "x": 0.9900847884892746,
            "y": -0.08145133632660631
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 88.28647312025555,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 24723.666666666082,
          "totalLifespan": 32757
        },
        {
          "position": {
            "x": 356.75824463236745,
            "y": 1130.4212013677147
          },
          "velocity": {
            "x": 0.7447980054955428,
            "y": -0.05316979385235312
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 94.24804879649145,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 22510.666666666086,
          "totalLifespan": 30494
        },
        {
          "position": {
            "x": 408.98130077161244,
            "y": -27.633112877117547
          },
          "velocity": {
            "x": 0.8592044133857457,
            "y": -0.05817476368944261
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 79.93506675249728,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27795.666666666733,
          "totalLifespan": 35729
        },
        {
          "position": {
            "x": 364.0152722493081,
            "y": 145.44816086948103
          },
          "velocity": {
            "x": 0.7695883134234845,
            "y": -0.0964308192794036
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 67.37411865250783,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 34239.666666667814,
          "totalLifespan": 42123
        },
        {
          "position": {
            "x": 346.8282982915217,
            "y": -293.2263289241065
          },
          "velocity": {
            "x": 0.737932549556424,
            "y": -0.01578773515503257
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 92.45598504967722,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 22667.666666666097,
          "totalLifespan": 30501
        },
        {
          "position": {
            "x": 473.7721508262116,
            "y": 406.80009613200406
          },
          "velocity": {
            "x": 1.0145013936321414,
            "y": -0.009325749446509643
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 64.31178131239164,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 35785.6666666678,
          "totalLifespan": 43569
        },
        {
          "position": {
            "x": 401.1838462308505,
            "y": -356.36667998605844
          },
          "velocity": {
            "x": 0.8646203582561335,
            "y": -0.09518546225285462
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 73.80699893954966,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29986.666666667184,
          "totalLifespan": 37720
        },
        {
          "position": {
            "x": 385.34829539029363,
            "y": 1098.9400106980513
          },
          "velocity": {
            "x": 0.8358965192848001,
            "y": 0.1015533778529035
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 70.23869984763036,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 31696.66666666755,
          "totalLifespan": 39380
        },
        {
          "position": {
            "x": 353.37425891479074,
            "y": -123.829813265217
          },
          "velocity": {
            "x": 0.7715595172812008,
            "y": 0.03713430106627056
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 68.4143700052187,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 32533.666666667723,
          "totalLifespan": 40167
        },
        {
          "position": {
            "x": 351.29201413544627,
            "y": 1080.45325357149
          },
          "velocity": {
            "x": 0.7720703607372401,
            "y": -0.0009265237275158171
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 69.93723581400553,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 31451.666666667483,
          "totalLifespan": 39035
        },
        {
          "position": {
            "x": 415.78157921038917,
            "y": -243.46490629244136
          },
          "velocity": {
            "x": 0.9198707504654575,
            "y": 0.09490502428416127
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 72.43009374248402,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29909.666666667137,
          "totalLifespan": 37443
        },
        {
          "position": {
            "x": 361.35783958009677,
            "y": 280.2225329330017
          },
          "velocity": {
            "x": 0.8048058787975485,
            "y": 0.08800787987852716
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 69.21001926781531,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 31441.666666667465,
          "totalLifespan": 38925
        },
        {
          "position": {
            "x": 349.6823155972931,
            "y": 602.0874882136734
          },
          "velocity": {
            "x": 0.7840410663616466,
            "y": -0.07826539778677596
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 74.14590895236859,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 28657.66666666685,
          "totalLifespan": 36091
        },
        {
          "position": {
            "x": 425.5060281280005,
            "y": 584.0176960460769
          },
          "velocity": {
            "x": 0.9605102215079047,
            "y": -0.06632347695090453
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 62.29200843683179,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 35286.66666666774,
          "totalLifespan": 42670
        },
        {
          "position": {
            "x": 451.30815326586065,
            "y": 211.2549289629303
          },
          "velocity": {
            "x": 1.0257003483315081,
            "y": -0.0018186682789623132
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 62.29647458586095,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 35044.666666667734,
          "totalLifespan": 42378
        },
        {
          "position": {
            "x": 436.9276380771746,
            "y": 776.3337959772222
          },
          "velocity": {
            "x": 0.9998344120759093,
            "y": -0.022315039121537376
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 60.85785906600171,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 35800.66666666773,
          "totalLifespan": 43084
        },
        {
          "position": {
            "x": 389.5257980884159,
            "y": 234.6939451580069
          },
          "velocity": {
            "x": 0.914379807719289,
            "y": -0.023536422940224812
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 83.94364346941398,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 23348.999999999483,
          "totalLifespan": 30449
        },
        {
          "position": {
            "x": 406.2196133626339,
            "y": 403.0774769732225
          },
          "velocity": {
            "x": 0.9603300552308083,
            "y": 0.008685029348522064
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 60.22352466600927,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 35093.000000001026,
          "totalLifespan": 42143
        },
        {
          "position": {
            "x": 345.87136717646575,
            "y": 412.26707451884397
          },
          "velocity": {
            "x": 0.8235032551820624,
            "y": 0.012851911268447964
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 68.9164797899657,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29566.000000000317,
          "totalLifespan": 36566
        },
        {
          "position": {
            "x": 395.48943983291514,
            "y": 683.4814395619113
          },
          "velocity": {
            "x": 0.9484159228607113,
            "y": -0.11259599650452329
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 81.47713950762608,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 23757.999999999494,
          "totalLifespan": 30708
        },
        {
          "position": {
            "x": 318.6441740473529,
            "y": 1013.7907371960121
          },
          "velocity": {
            "x": 0.769671917988779,
            "y": -0.06868504748872778
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 67.64337454386663,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29822.00000000036,
          "totalLifespan": 36722
        },
        {
          "position": {
            "x": 423.6791319624961,
            "y": 308.2091855093149
          },
          "velocity": {
            "x": 1.0308494694951191,
            "y": -0.12583930814421274
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 68.81924483018281,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 28983.000000000167,
          "totalLifespan": 35833
        },
        {
          "position": {
            "x": 332.79991049255955,
            "y": 657.1666205364937
          },
          "velocity": {
            "x": 0.8156860551288244,
            "y": -0.037486873427111676
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 70.68607068607162,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27831.99999999991,
          "totalLifespan": 34632
        },
        {
          "position": {
            "x": 348.3336234518142,
            "y": 321.0614402971112
          },
          "velocity": {
            "x": 0.8600830208686852,
            "y": -0.003425969659255262
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 68.24884145485055,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 28855.000000000127,
          "totalLifespan": 35605
        },
        {
          "position": {
            "x": 374.33636423270946,
            "y": 832.7316192460045
          },
          "velocity": {
            "x": 0.931184985653509,
            "y": -0.05708264878387281
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 59.29349295704537,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 33979.000000000975,
          "totalLifespan": 40679
        },
        {
          "position": {
            "x": 374.3835511576326,
            "y": 871.6300624096658
          },
          "velocity": {
            "x": 0.9383046394928134,
            "y": 0.05999594283856622
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 74.61663134273078,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 25433.999999999516,
          "totalLifespan": 32084
        },
        {
          "position": {
            "x": 288.07461149972085,
            "y": -258.73665153714114
          },
          "velocity": {
            "x": 0.7274611401508153,
            "y": 0.02335609623654914
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 66.85236768802105,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 28941.000000000124,
          "totalLifespan": 35541
        },
        {
          "position": {
            "x": 350.8099328561383,
            "y": -107.30704093880748
          },
          "velocity": {
            "x": 0.8926461395830491,
            "y": 0.03623272012537433
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 61.93528052111145,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 31522.00000000068,
          "totalLifespan": 38072
        },
        {
          "position": {
            "x": 348.4973988381398,
            "y": 1166.480388879181
          },
          "velocity": {
            "x": 0.8935830739439534,
            "y": -0.11712860159756527
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 67.73773339122977,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 28044.999999999913,
          "totalLifespan": 34545
        },
        {
          "position": {
            "x": 405.9288698056674,
            "y": 890.2824182463961
          },
          "velocity": {
            "x": 1.048911808283375,
            "y": -0.027096979381932517
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 73.557829378787,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 25116.99999999953,
          "totalLifespan": 31567
        },
        {
          "position": {
            "x": 365.48334689679956,
            "y": 50.543512268504855
          },
          "velocity": {
            "x": 0.9517795492104187,
            "y": 0.03831777269891248
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 69.99422790655763,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 26516.999999999563,
          "totalLifespan": 32917
        },
        {
          "position": {
            "x": 341.9861256187787,
            "y": -37.8826627822514
          },
          "velocity": {
            "x": 0.8976013795768484,
            "y": 0.08908588510654684
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 56.34427684116304,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 34222.000000000924,
          "totalLifespan": 40572
        },
        {
          "position": {
            "x": 326.9103919657848,
            "y": -330.0243160720323
          },
          "velocity": {
            "x": 0.8648423067877908,
            "y": 0.09601868445172383
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 52.12714610769427,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 37209.00000000092,
          "totalLifespan": 43509
        },
        {
          "position": {
            "x": 322.9023018391069,
            "y": 794.6831861899689
          },
          "velocity": {
            "x": 0.861072804904283,
            "y": 0.04865037725865615
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 55.30293720043437,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 34435.00000000091,
          "totalLifespan": 40685
        },
        {
          "position": {
            "x": 317.4189313141459,
            "y": 103.78746612981587
          },
          "velocity": {
            "x": 0.8532766970810396,
            "y": 0.10490900494870657
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 71.97910284111589,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 24808.99999999955,
          "totalLifespan": 31009
        },
        {
          "position": {
            "x": 283.9339089797729,
            "y": 380.0913299757269
          },
          "velocity": {
            "x": 0.769468588021068,
            "y": -0.08259956398782954
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 51.23576784225861,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 37062.000000000895,
          "totalLifespan": 43212
        },
        {
          "position": {
            "x": 267.86279427788236,
            "y": -382.4113448249211
          },
          "velocity": {
            "x": 0.731865558136286,
            "y": -0.004338580425925752
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 52.7833862128565,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 35504.00000000089,
          "totalLifespan": 41604
        },
        {
          "position": {
            "x": 341.9309502092281,
            "y": 502.39476950382976
          },
          "velocity": {
            "x": 0.9419585405212955,
            "y": -0.031117608890016094
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 49.9277903857984,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 37573.00000000088,
          "totalLifespan": 43623
        },
        {
          "position": {
            "x": 361.6991180582611,
            "y": 937.1637644035166
          },
          "velocity": {
            "x": 1.004719772384053,
            "y": 0.10669788972704146
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 63.24295836505382,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 28153.999999999865,
          "totalLifespan": 34154
        },
        {
          "position": {
            "x": 352.4817323579635,
            "y": 43.17794307654732
          },
          "velocity": {
            "x": 0.9873437881175479,
            "y": -0.065226043765097
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 63.913588351139765,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27563.999999999727,
          "totalLifespan": 33514
        },
        {
          "position": {
            "x": 258.66277358251193,
            "y": -95.73057774866473
          },
          "velocity": {
            "x": 0.7306858010805467,
            "y": -0.015154609556032574
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 68.85819879401396,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 24945.99999999957,
          "totalLifespan": 30846
        },
        {
          "position": {
            "x": 334.35875747698145,
            "y": 629.659708193454
          },
          "velocity": {
            "x": 0.9525890526409673,
            "y": 0.1123811766674608
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 61.16225713704944,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 28582.999999999935,
          "totalLifespan": 34433
        },
        {
          "position": {
            "x": 279.0616430613157,
            "y": 196.46478824506164
          },
          "velocity": {
            "x": 0.8019012731647008,
            "y": 0.041714909960675686
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 56.65138236969449,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 31057.00000000047,
          "totalLifespan": 36857
        },
        {
          "position": {
            "x": 343.61599042556884,
            "y": 619.5800436101372
          },
          "velocity": {
            "x": 0.99598837804513,
            "y": 0.031029205650812283
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 53.02797417767442,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 33286.00000000084,
          "totalLifespan": 39036
        },
        {
          "position": {
            "x": 327.9384553474844,
            "y": -17.398070962271554
          },
          "velocity": {
            "x": 0.9588843723610616,
            "y": 0.015591850999083612
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 58.20616100300549,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29554.000000000127,
          "totalLifespan": 35254
        },
        {
          "position": {
            "x": 276.45934046374026,
            "y": 812.9147410246901
          },
          "velocity": {
            "x": 0.8155142786541061,
            "y": 0.0813863700656672
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 49.84927578853768,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 35153.00000000082,
          "totalLifespan": 40803
        },
        {
          "position": {
            "x": 335.37121037769896,
            "y": 455.0794505866684
          },
          "velocity": {
            "x": 0.9981286023145807,
            "y": -0.05092184588998247
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 56.49907516394592,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 30082.000000000226,
          "totalLifespan": 35682
        },
        {
          "position": {
            "x": 288.96669441862105,
            "y": -223.11862178517114
          },
          "velocity": {
            "x": 0.8677678511069638,
            "y": -0.0693395904866987
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 65.78644101281304,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 24820.999999999596,
          "totalLifespan": 30371
        },
        {
          "position": {
            "x": 320.3525569266837,
            "y": 372.01239294422305
          },
          "velocity": {
            "x": 0.9707653240202566,
            "y": -0.07486399306862171
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 65.9296750133239,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 24531.9999999996,
          "totalLifespan": 30032
        },
        {
          "position": {
            "x": 257.3405786240693,
            "y": 747.3048545500529
          },
          "velocity": {
            "x": 0.7869742465567894,
            "y": -0.07489763802388374
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 62.58173582980265,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 25900.999999999603,
          "totalLifespan": 31351
        },
        {
          "position": {
            "x": 240.1271562984983,
            "y": -352.5355108044396
          },
          "velocity": {
            "x": 0.7411331984521504,
            "y": 0.034809313779528846
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 43.48506878424598,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 39305.000000000786,
          "totalLifespan": 44705
        },
        {
          "position": {
            "x": 232.07052982596267,
            "y": 835.4781109776413
          },
          "velocity": {
            "x": 0.7229611521058057,
            "y": -0.048683693193641873
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 45.76343677231665,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 36736.00000000078,
          "totalLifespan": 42086
        },
        {
          "position": {
            "x": 296.54293851797513,
            "y": 748.6297568096272
          },
          "velocity": {
            "x": 0.9325249638930071,
            "y": -0.1119903554874678
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 42.77067921989959,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 39310.00000000077,
          "totalLifespan": 44610
        },
        {
          "position": {
            "x": 307.5139278967699,
            "y": 1195.4566863629448
          },
          "velocity": {
            "x": 0.9762346917357709,
            "y": -0.09878257730747585
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 54.54545454545428,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29400.000000000025,
          "totalLifespan": 34650
        },
        {
          "position": {
            "x": 237.1140752870971,
            "y": -303.3251687702632
          },
          "velocity": {
            "x": 0.759981010535565,
            "y": 0.06508278003263535
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 57.33361918471519,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27450.99999999962,
          "totalLifespan": 32651
        },
        {
          "position": {
            "x": 259.0417975832306,
            "y": 1052.41359445334
          },
          "velocity": {
            "x": 0.8383229695250162,
            "y": 0.09860516727488547
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 42.393615804992294,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 38583.00000000075,
          "totalLifespan": 43733
        },
        {
          "position": {
            "x": 299.47921526269954,
            "y": -176.2876574657435
          },
          "velocity": {
            "x": 0.9786902459565344,
            "y": -0.1183920295202513
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 56.045666839651176,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27658.99999999963,
          "totalLifespan": 32759
        },
        {
          "position": {
            "x": 241.4850124937373,
            "y": 834.5219502224967
          },
          "velocity": {
            "x": 0.7969802392532562,
            "y": 0.011617820210313434
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 50.93007619901118,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 30646.00000000027,
          "totalLifespan": 35696
        },
        {
          "position": {
            "x": 236.88918371040828,
            "y": 91.65011781826422
          },
          "velocity": {
            "x": 0.7896306123680236,
            "y": 0.06808096202579277
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 55.46311702718094,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27453.999999999636,
          "totalLifespan": 32454
        },
        {
          "position": {
            "x": 296.19231939229735,
            "y": -250.25648620765654
          },
          "velocity": {
            "x": 0.9972805366744069,
            "y": 0.015229235905024117
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 54.463767230053804,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27768.99999999964,
          "totalLifespan": 32719
        },
        {
          "position": {
            "x": 282.3907840345799,
            "y": 24.37655036302317
          },
          "velocity": {
            "x": 0.9605128708659137,
            "y": 0.07201548264875256
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 41.71593435178886,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 37386.00000000071,
          "totalLifespan": 42286
        },
        {
          "position": {
            "x": 264.222871999648,
            "y": 967.7723679522409
          },
          "velocity": {
            "x": 0.9079823780056561,
            "y": -0.059599650189204746
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 55.51669316375603,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 26599.999999999647,
          "totalLifespan": 31450
        },
        {
          "position": {
            "x": 287.94959952182586,
            "y": 1055.3407745072464
          },
          "velocity": {
            "x": 0.9998249983396745,
            "y": 0.05378504228882254
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 43.630854690058015,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 34805.0000000007,
          "totalLifespan": 39605
        },
        {
          "position": {
            "x": 283.530148653169,
            "y": 418.17294526354675
          },
          "velocity": {
            "x": 0.9948426268532252,
            "y": -0.08101092006435454
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 38.94240623077934,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 39161.00000000069,
          "totalLifespan": 43911
        },
        {
          "position": {
            "x": 253.50469931080258,
            "y": 1128.6146645838548
          },
          "velocity": {
            "x": 0.8989528344354645,
            "y": 0.09585885121918243
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 48.67523949253376,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 30061.00000000009,
          "totalLifespan": 34761
        },
        {
          "position": {
            "x": 272.0923308900953,
            "y": 840.042797750815
          },
          "velocity": {
            "x": 0.9752413293551755,
            "y": -0.11266001070126275
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 55.68121341139306,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 25413.99999999966,
          "totalLifespan": 30064
        },
        {
          "position": {
            "x": 209.4231322228446,
            "y": -64.18756925274215
          },
          "velocity": {
            "x": 0.7587794645755203,
            "y": -0.09585390180689235
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 37.43980466188327,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 39631.00000000067,
          "totalLifespan": 44231
        },
        {
          "position": {
            "x": 265.27730195364296,
            "y": 740.122403835284
          },
          "velocity": {
            "x": 0.9788830330392762,
            "y": -0.08699455492182855
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 41.24495852674238,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 34906.33333333399,
          "totalLifespan": 39423
        },
        {
          "position": {
            "x": 209.90231584275412,
            "y": 889.3676485089627
          },
          "velocity": {
            "x": 0.7832175964281842,
            "y": -0.0739018368627281
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 41.63430169332935,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 34155.33333333398,
          "totalLifespan": 38622
        },
        {
          "position": {
            "x": 231.94538945068814,
            "y": 1206.5372141182095
          },
          "velocity": {
            "x": 0.8752656205686404,
            "y": 0.044094973639647324
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 40.68993755757418,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 34659.333333333976,
          "totalLifespan": 39076
        },
        {
          "position": {
            "x": 249.20385660103082,
            "y": 635.7633072305688
          },
          "velocity": {
            "x": 0.9511597580191982,
            "y": -0.029814392538058336
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 50.050942435052036,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27041.333333333016,
          "totalLifespan": 31408
        },
        {
          "position": {
            "x": 261.5751389364386,
            "y": 523.9583137510346
          },
          "velocity": {
            "x": 1.0099426213762082,
            "y": 0.019347936583822844
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 45.766455603004545,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29638.333333333278,
          "totalLifespan": 33955
        },
        {
          "position": {
            "x": 243.43198500826344,
            "y": 1169.7501019269546
          },
          "velocity": {
            "x": 0.9583936417648207,
            "y": 0.08562527413447692
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 37.821069611608834,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 36061.66666666728,
          "totalLifespan": 40295
        },
        {
          "position": {
            "x": 198.71763528704258,
            "y": 1168.0069037188869
          },
          "velocity": {
            "x": 0.8077952653944822,
            "y": 0.01597341125679355
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 42.30923579659293,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 30786.000000000164,
          "totalLifespan": 34886
        },
        {
          "position": {
            "x": 175.2361633444042,
            "y": 1145.2078954487856
          },
          "velocity": {
            "x": 0.7211364746683331,
            "y": -0.0701294329313803
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 32.48301214213626,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 40835.00000000059,
          "totalLifespan": 44885
        },
        {
          "position": {
            "x": 177.85116306643687,
            "y": -446.9466235149803
          },
          "velocity": {
            "x": 0.7410465127768211,
            "y": -0.06595034433770561
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 43.02231782737442,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29470.99999999986,
          "totalLifespan": 33471
        },
        {
          "position": {
            "x": 231.04096757484274,
            "y": 589.7852706419399
          },
          "velocity": {
            "x": 0.9748564032693829,
            "y": -0.06224062726574231
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 36.168481025531435,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 35366.000000000575,
          "totalLifespan": 39316
        },
        {
          "position": {
            "x": 210.36590732570735,
            "y": 1281.772780616581
          },
          "velocity": {
            "x": 0.8989996039560156,
            "y": -0.007759350166834504
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 33.500357909801835,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 38010.00000000057,
          "totalLifespan": 41910
        },
        {
          "position": {
            "x": 222.24817328233837,
            "y": 614.7206872310243
          },
          "velocity": {
            "x": 0.9621133042525501,
            "y": -0.02676503714207682
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 44.31371295201268,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27426.99999999972,
          "totalLifespan": 31277
        },
        {
          "position": {
            "x": 175.3719187217142,
            "y": 227.74017491837117
          },
          "velocity": {
            "x": 0.7691750821127801,
            "y": -0.016889235545880496
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 34.17436922307769,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 36230.00000000055,
          "totalLifespan": 40030
        },
        {
          "position": {
            "x": 175.7271394305971,
            "y": -364.1123612876462
          },
          "velocity": {
            "x": 0.78100950858043,
            "y": 0.07384089399387407
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 38.14098036445523,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 31645.0000000003,
          "totalLifespan": 35395
        },
        {
          "position": {
            "x": 221.661956665893,
            "y": 115.18089538036759
          },
          "velocity": {
            "x": 0.9984772822787918,
            "y": -0.1222199840811394
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 36.23700963055131,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 33058.00000000054,
          "totalLifespan": 36758
        },
        {
          "position": {
            "x": 209.6496056481728,
            "y": 679.4944600374318
          },
          "velocity": {
            "x": 0.9573041353797794,
            "y": 0.06362978797833753
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 42.09649516243019,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27563.999999999734,
          "totalLifespan": 31214
        },
        {
          "position": {
            "x": 187.280363499989,
            "y": 837.5464976500562
          },
          "velocity": {
            "x": 0.8670387199073566,
            "y": 0.10476759976047798
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 33.77022695885063,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 34777.000000000524,
          "totalLifespan": 38377
        },
        {
          "position": {
            "x": 223.02805571935085,
            "y": -22.313068005551365
          },
          "velocity": {
            "x": 1.047080073799765,
            "y": 0.061360002797165976
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 28.747525643328572,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 40906.00000000052,
          "totalLifespan": 44456
        },
        {
          "position": {
            "x": 188.19309554451934,
            "y": 1020.745575483744
          },
          "velocity": {
            "x": 0.8961575978310473,
            "y": 0.04627437925139171
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 29.34053651266339,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 39444.00000000051,
          "totalLifespan": 42944
        },
        {
          "position": {
            "x": 178.3374561656351,
            "y": -149.03569086830507
          },
          "velocity": {
            "x": 0.8615336046648995,
            "y": 0.08864079488906634
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 38.02118410580084,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29215.99999999975,
          "totalLifespan": 32666
        },
        {
          "position": {
            "x": 184.35034182390342,
            "y": 456.5679136414417
          },
          "velocity": {
            "x": 0.9036781461956076,
            "y": 0.08669611675918494
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 32.88024499005593,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 33826.000000000495,
          "totalLifespan": 37226
        },
        {
          "position": {
            "x": 205.39685074531334,
            "y": -156.70726877974772
          },
          "velocity": {
            "x": 1.0218748793299213,
            "y": -0.06824939300991112
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 32.38801160167111,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 33886.00000000049,
          "totalLifespan": 37236
        },
        {
          "position": {
            "x": 159.50895356741148,
            "y": 1115.4803755501966
          },
          "velocity": {
            "x": 0.8056007755929859,
            "y": -0.05468326331444102
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 31.897755343137874,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 33944.00000000048,
          "totalLifespan": 37244
        },
        {
          "position": {
            "x": 160.22041973478272,
            "y": 1058.7158994469144
          },
          "velocity": {
            "x": 0.8216431781270923,
            "y": 0.07730460496701635
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 29.73996593883811,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 36091.00000000047,
          "totalLifespan": 39341
        },
        {
          "position": {
            "x": 143.14017847469597,
            "y": 475.2897551646249
          },
          "velocity": {
            "x": 0.745521762889041,
            "y": -0.028241594203177376
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 35.115527647384056,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29605.999999999774,
          "totalLifespan": 32806
        },
        {
          "position": {
            "x": 164.4062574638501,
            "y": 337.6979075870481
          },
          "velocity": {
            "x": 0.8698743781156054,
            "y": 0.06843373364245574
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 33.51757160169063,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 30683,
          "totalLifespan": 33833
        },
        {
          "position": {
            "x": 156.38879610076916,
            "y": 1079.4780780075118
          },
          "velocity": {
            "x": 0.840799979036391,
            "y": -0.06387537002672149
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 27.039468902183955,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 38173.00000000045,
          "totalLifespan": 41273
        },
        {
          "position": {
            "x": 134.36405770356404,
            "y": -95.99588196791662
          },
          "velocity": {
            "x": 0.7342298235167428,
            "y": 0.007225610604925276
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 27.51534895376119,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 36855.000000000444,
          "totalLifespan": 39905
        },
        {
          "position": {
            "x": 187.0407835026542,
            "y": -79.0820335242505
          },
          "velocity": {
            "x": 1.0391154639036317,
            "y": 0.10295616194107768
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 30.02502085070455,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 32970.00000000044,
          "totalLifespan": 35970
        },
        {
          "position": {
            "x": 155.96936283044087,
            "y": 217.9741207650323
          },
          "velocity": {
            "x": 0.8811828408499455,
            "y": 0.08778017848596867
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 33.456195066631324,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 28792.999999999785,
          "totalLifespan": 31743
        },
        {
          "position": {
            "x": 161.74056318878834,
            "y": -228.73364073084934
          },
          "velocity": {
            "x": 0.9295434666022304,
            "y": -0.0942232451392642
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 24.56990892188577,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 39591.00000000042,
          "totalLifespan": 42491
        },
        {
          "position": {
            "x": 168.4364219078496,
            "y": 1032.745890780251
          },
          "velocity": {
            "x": 0.9850083152505829,
            "y": 0.03929904535465814
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 23.025651383555555,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 41709.000000000415,
          "totalLifespan": 44559
        },
        {
          "position": {
            "x": 149.03433614893768,
            "y": 557.9994012729072
          },
          "velocity": {
            "x": 0.8871091437436758,
            "y": -0.07129890588213858
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 33.377483443711014,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 27399.999999999796,
          "totalLifespan": 30200
        },
        {
          "position": {
            "x": 121.2768962983366,
            "y": 83.28680766954385
          },
          "velocity": {
            "x": 0.7350114927171888,
            "y": 0.08313950286888465
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 25.708943596132144,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 35758.0000000004,
          "totalLifespan": 38508
        },
        {
          "position": {
            "x": 168.4855625719728,
            "y": -274.177463409727
          },
          "velocity": {
            "x": 1.0400343368640266,
            "y": -0.09180406178237166
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 21.934377397658977,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 41614.00000000039,
          "totalLifespan": 44314
        },
        {
          "position": {
            "x": 151.51097309758674,
            "y": -85.39763209084757
          },
          "velocity": {
            "x": 0.952899201871611,
            "y": 0.11240764611128047
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 25.561331118371527,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 34672.000000000386,
          "totalLifespan": 37322
        },
        {
          "position": {
            "x": 158.6207999164704,
            "y": -113.83738883370309
          },
          "velocity": {
            "x": 1.0167999994645545,
            "y": 0.09534903974894081
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 21.793797150038756,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 40348.00000000038,
          "totalLifespan": 42948
        },
        {
          "position": {
            "x": 146.49176467100068,
            "y": 764.9499469549809
          },
          "velocity": {
            "x": 0.9574625141895462,
            "y": 0.0757869032894547
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 23.242271564925602,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 36947.00000000037,
          "totalLifespan": 39497
        },
        {
          "position": {
            "x": 134.99233305715492,
            "y": 6.340454949676445
          },
          "velocity": {
            "x": 0.8999488870476977,
            "y": 0.011550740498277761
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 28.31702482459383,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29282.999999999818,
          "totalLifespan": 31783
        },
        {
          "position": {
            "x": 112.09185650472149,
            "y": 1122.7924225706618
          },
          "velocity": {
            "x": 0.7625296360865392,
            "y": -0.08804759467855046
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 23.167848699760214,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 35620.00000000036,
          "totalLifespan": 38070
        },
        {
          "position": {
            "x": 134.63304170563515,
            "y": 354.604734813749
          },
          "velocity": {
            "x": 0.9349516785113536,
            "y": 0.030976472165110226
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 21.70854271356467,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 37400.00000000035,
          "totalLifespan": 39800
        },
        {
          "position": {
            "x": 104.60153827755525,
            "y": 291.8589766897472
          },
          "velocity": {
            "x": 0.7418548814011015,
            "y": 0.010772000691451246
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 25.09789960840118,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 31358.000000000033,
          "totalLifespan": 33708
        },
        {
          "position": {
            "x": 137.73940917154144,
            "y": 745.245996952694
          },
          "velocity": {
            "x": 0.9981116606633444,
            "y": -0.06957372184180179
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 20.066403315315938,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 38963.000000000335,
          "totalLifespan": 41263
        },
        {
          "position": {
            "x": 112.03050159224514,
            "y": 382.47273275323903
          },
          "velocity": {
            "x": 0.8298555673499627,
            "y": 0.10366743660698138
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 24.163236083765923,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 31272,
          "totalLifespan": 33522
        },
        {
          "position": {
            "x": 98.49719720327826,
            "y": 1107.2897065183506
          },
          "velocity": {
            "x": 0.7461908879036214,
            "y": 0.03922133246273346
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 25.085518814140926,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29371.99999999984,
          "totalLifespan": 31572
        },
        {
          "position": {
            "x": 109.74951440097757,
            "y": 995.6080967354467
          },
          "velocity": {
            "x": 0.8507714294649427,
            "y": 0.09875405699303326
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 20.272924906359208,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 36029.00000000031,
          "totalLifespan": 38179
        },
        {
          "position": {
            "x": 122.5240283522817,
            "y": 878.726285313712
          },
          "velocity": {
            "x": 0.9724129234308052,
            "y": 0.07196578917694889
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 21.198440961217273,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 33563.000000000306,
          "totalLifespan": 35663
        },
        {
          "position": {
            "x": 115.07259783628894,
            "y": -365.1755663524787
          },
          "velocity": {
            "x": 0.935549575904786,
            "y": 0.11487903824474568
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 19.352301035791072,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 36085.0000000003,
          "totalLifespan": 38135
        },
        {
          "position": {
            "x": 102.22261451159117,
            "y": 966.2130920014047
          },
          "velocity": {
            "x": 0.8518551209299251,
            "y": 0.0049766715946240134
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 18.489984591676773,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 36940.00000000029,
          "totalLifespan": 38940
        },
        {
          "position": {
            "x": 89.88688486002825,
            "y": -80.62196044596587
          },
          "velocity": {
            "x": 0.7682639731626345,
            "y": 0.05276510113358962
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 18.8410853753428,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 35309.000000000284,
          "totalLifespan": 37259
        },
        {
          "position": {
            "x": 87.86226128606624,
            "y": 606.4271495314987
          },
          "velocity": {
            "x": 0.7707215902286506,
            "y": 0.013829332375343851
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 22.21572639579233,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 28888.99999999986,
          "totalLifespan": 30789
        },
        {
          "position": {
            "x": 93.39107199783874,
            "y": 490.3902043582288
          },
          "velocity": {
            "x": 0.841361008989538,
            "y": -0.0694336403598127
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 17.152128563699932,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 36979.00000000027,
          "totalLifespan": 38829
        },
        {
          "position": {
            "x": 77.03563652892011,
            "y": -11.668725304052465
          },
          "velocity": {
            "x": 0.7132929308233323,
            "y": -0.019562057735653282
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 15.210910542003887,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 40801.00000000026,
          "totalLifespan": 42601
        },
        {
          "position": {
            "x": 74.70814499545986,
            "y": 743.0167202203145
          },
          "velocity": {
            "x": 0.7115061428139018,
            "y": 0.06479704725866345
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 14.611406173896796,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 41367.000000000255,
          "totalLifespan": 43117
        },
        {
          "position": {
            "x": 75.2200143782804,
            "y": -163.0750608457202
          },
          "velocity": {
            "x": 0.7374511213556875,
            "y": -0.02056308118514737
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 14.290384345956,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 41126.00000000025,
          "totalLifespan": 42826
        },
        {
          "position": {
            "x": 91.7788869285535,
            "y": -390.5012824946672
          },
          "velocity": {
            "x": 0.9270594639247813,
            "y": 0.02130048181936409
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 15.634458979283352,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 36343.00000000024,
          "totalLifespan": 37993
        },
        {
          "position": {
            "x": 76.24730922726894,
            "y": -71.40570719610095
          },
          "velocity": {
            "x": 0.7942428044507152,
            "y": -0.09431777912155823
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 16.95613776861785,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 32370.000000000146,
          "totalLifespan": 33970
        },
        {
          "position": {
            "x": 74.80703458744173,
            "y": 39.98552467298516
          },
          "velocity": {
            "x": 0.8043767159939951,
            "y": -0.02483452369963162
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 13.721873847286872,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 39115.000000000226,
          "totalLifespan": 40665
        },
        {
          "position": {
            "x": 75.36099595113566,
            "y": 563.2282460602223
          },
          "velocity": {
            "x": 0.837344399457062,
            "y": -0.10990844901285868
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 15.290519877673603,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 33816.00000000022,
          "totalLifespan": 35316
        },
        {
          "position": {
            "x": 72.42231227625496,
            "y": -274.3346154044555
          },
          "velocity": {
            "x": 0.8324403709914333,
            "y": -0.05876954212903796
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 12.097334878329661,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 41700.00000000021,
          "totalLifespan": 43150
        },
        {
          "position": {
            "x": 61.94058862117941,
            "y": 283.74151349338774
          },
          "velocity": {
            "x": 0.7373879597759437,
            "y": -0.009610096038930004
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 15.180265654649077,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 31800.99999999999,
          "totalLifespan": 33201
        },
        {
          "position": {
            "x": 68.16859866697898,
            "y": 571.3595655507398
          },
          "velocity": {
            "x": 0.8415876378639361,
            "y": 0.06975035578770705
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 13.189676228727706,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 35497.0000000002,
          "totalLifespan": 36847
        },
        {
          "position": {
            "x": 73.03108322376642,
            "y": -240.18806715782057
          },
          "velocity": {
            "x": 0.9362959387662324,
            "y": 0.03364906524768167
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 10.414812177317344,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 43636.00000000019,
          "totalLifespan": 44936
        },
        {
          "position": {
            "x": 65.16650070058918,
            "y": 97.46782734056667
          },
          "velocity": {
            "x": 0.868886676007854,
            "y": 0.057610866012038936
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 10.94278141186038,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 39873.00000000018,
          "totalLifespan": 41123
        },
        {
          "position": {
            "x": 66.48655650510914,
            "y": 1281.0659447251983
          },
          "velocity": {
            "x": 0.9234243959042937,
            "y": -0.044869939167688055
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 13.012832098319166,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 31998.000000000004,
          "totalLifespan": 33198
        },
        {
          "position": {
            "x": 63.92961340862987,
            "y": 968.7400852883162
          },
          "velocity": {
            "x": 0.9265161363569548,
            "y": -0.03522218632825017
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 10.347154532502088,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 38861.00000000017,
          "totalLifespan": 40011
        },
        {
          "position": {
            "x": 51.47183118583857,
            "y": 581.9967356095996
          },
          "velocity": {
            "x": 0.7798762300884611,
            "y": 0.032935543347715285
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 10.587102983636612,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 36304.00000000016,
          "totalLifespan": 37404
        },
        {
          "position": {
            "x": 58.97837380940419,
            "y": -294.4387280029156
          },
          "velocity": {
            "x": 0.9361646636413333,
            "y": 0.06156355634914273
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 10.567810114902443,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 34719.00000000015,
          "totalLifespan": 35769
        },
        {
          "position": {
            "x": 52.74900020205246,
            "y": 1127.2438244656819
          },
          "velocity": {
            "x": 0.8791500033675391,
            "y": 0.003435621224445223
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 11.832374691866107,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29424.999999999927,
          "totalLifespan": 30425
        },
        {
          "position": {
            "x": 51.546778503127115,
            "y": 1128.6525873038925
          },
          "velocity": {
            "x": 0.9043294474232828,
            "y": 0.10526184893095344
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 8.2375894211998,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 40567.00000000014,
          "totalLifespan": 41517
        },
        {
          "position": {
            "x": 46.323097819905904,
            "y": 1225.6334678401017
          },
          "velocity": {
            "x": 0.8578351448130707,
            "y": -0.02106652679532583
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 7.908997705413071,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 40066.00000000013,
          "totalLifespan": 40966
        },
        {
          "position": {
            "x": 51.877633229825406,
            "y": -27.484013324449656
          },
          "velocity": {
            "x": 1.0172084947024551,
            "y": -0.04199573123962971
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 7.239861827472566,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 41416.000000000124,
          "totalLifespan": 42266
        },
        {
          "position": {
            "x": 46.57747871443519,
            "y": 248.85725481619988
          },
          "velocity": {
            "x": 0.9703641398840648,
            "y": -0.013541419307490978
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 8.475573866979346,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 33180.00000000012,
          "totalLifespan": 33980
        },
        {
          "position": {
            "x": 37.7535828774503,
            "y": 192.89338616279213
          },
          "velocity": {
            "x": 0.8389685083877815,
            "y": -0.06429255672436306
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 8.291873963516366,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 31811.999999999945,
          "totalLifespan": 32562
        },
        {
          "position": {
            "x": 30.01248632620969,
            "y": -335.4031538806257
          },
          "velocity": {
            "x": 0.7145830077668931,
            "y": 0.00239001982741443
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 8.21274931560481,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29983.99999999995,
          "totalLifespan": 30684
        },
        {
          "position": {
            "x": 34.544014078309665,
            "y": 118.6971563778792
          },
          "velocity": {
            "x": 0.8857439507258857,
            "y": -0.11110423064939758
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 7.461496763496598,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 30710.999999999953,
          "totalLifespan": 31361
        },
        {
          "position": {
            "x": 30.078532580286275,
            "y": 442.37533605007013
          },
          "velocity": {
            "x": 0.8355147938968382,
            "y": 0.10272871693297361
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 7.142620945075066,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 29640.999999999956,
          "totalLifespan": 30241
        },
        {
          "position": {
            "x": 32.18797014665883,
            "y": 950.1983100646896
          },
          "velocity": {
            "x": 0.9753930347472352,
            "y": 0.06800581518006246
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 5.3162925571896835,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 36694.00000000008,
          "totalLifespan": 37244
        },
        {
          "position": {
            "x": 23.096039191234663,
            "y": -24.207910465620152
          },
          "velocity": {
            "x": 0.7698679730411506,
            "y": 0.034157151303954886
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 4.02594497875134,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 44210.00000000007,
          "totalLifespan": 44710
        },
        {
          "position": {
            "x": 26.380582165757716,
            "y": 159.69446308767516
          },
          "velocity": {
            "x": 0.977058598731763,
            "y": -0.05284105415336623
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 4.875259562429676,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 32779.000000000065,
          "totalLifespan": 33229
        },
        {
          "position": {
            "x": 20.38040821865896,
            "y": 416.4872441073434
          },
          "velocity": {
            "x": 0.8491836757774519,
            "y": -0.1091605451058232
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 3.6331525167144605,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 39235.00000000006,
          "totalLifespan": 39635
        },
        {
          "position": {
            "x": 21.864456793163345,
            "y": -356.91484249185424
          },
          "velocity": {
            "x": 1.041164609198247,
            "y": -0.03883747515017639
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 3.079404648434206,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 40567.00000000005,
          "totalLifespan": 40917
        },
        {
          "position": {
            "x": 12.834026183774048,
            "y": 1142.4878688095832
          },
          "velocity": {
            "x": 0.7130014546541106,
            "y": -0.06770637831806431
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 2.67996724484442,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 39999.000000000044,
          "totalLifespan": 40299
        },
        {
          "position": {
            "x": 15.558102800835234,
            "y": 440.4127458385231
          },
          "velocity": {
            "x": 1.0372068533890084,
            "y": 0.11991514906067227
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 2.448180186061336,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 36512.00000000004,
          "totalLifespan": 36762
        },
        {
          "position": {
            "x": 9.570045030359559,
            "y": 160.2735460304367
          },
          "velocity": {
            "x": 0.7975037525299531,
            "y": 0.07985090577810583
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 2.0051800484582145,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 35707.00000000003,
          "totalLifespan": 35907
        },
        {
          "position": {
            "x": 7.313003154607885,
            "y": -246.32917648531546
          },
          "velocity": {
            "x": 0.8125559060675264,
            "y": -0.06560070813931596
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 1.290445920756838,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 41696.00000000002,
          "totalLifespan": 41846
        },
        {
          "position": {
            "x": 4.803969744480909,
            "y": 66.80407538765365
          },
          "velocity": {
            "x": 0.8006616240801302,
            "y": 0.07153521256875962
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 1.1758557616933558,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 30515.999999999993,
          "totalLifespan": 30616
        },
        {
          "position": {
            "x": 2.435773520932944,
            "y": 493.38294607342334
          },
          "velocity": {
            "x": 0.8119245069776141,
            "y": -0.07028944518028854
          },
          "acceleration": {
            "x": 0,
            "y": 0
          },
          "color": {
            "h": 0.45953535869278994,
            "s": 100,
            "l": 50,
            "a": 0.5
          },
          "size": 2,
          "lifespan": 39120.00000000001,
          "totalLifespan": 39170
        }
      ]
    };
  }
}