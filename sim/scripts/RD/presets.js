// presets.js

export function getPreset(id) {
  let options;
  switch (id) {
    case "unstableHeatEquation":
      options = {
        boundaryConditionsU: "neumann",
        brushRadius: 20,
        clearValueU: "0",
        diffusionStrUU: "100",
        diffusionStrVV: "0",
        diffusionStrWW: "0",
        domainScale: 320,
        dt: 0.01,
        numSpecies: 1,
        numTimestepsPerFrame: 1,
        preset: "unstableHeatEquation",
        reactionStrU: "0",
        reactionStrV: "0",
        reactionStrW: "0",
        spatialStep: 1.5,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;
    case "bistableTravellingWave":
      options = {
        boundaryConditionsU: "neumann",
        clearValueU: "0",
        diffusionStrVV: "0",
        diffusionStrWW: "0",
        dt: 0.005,
        kineticParams: "a=0.5",
        numSpecies: 1,
        preset: "bistableTravellingWave",
        reactionStrU: "u*(u-a)*(1-u)",
        reactionStrV: "0",
        reactionStrW: "0",
        typeOfBrush: "vline",
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "brusselator":
      options = {
        clearValueU: "a",
        clearValueV: "b/a",
        diffusionStrUU: "0.0001",
        diffusionStrVV: "0.0001*D",
        diffusionStrWW: "0",
        dt: 0.001,
        kineticParams: "a=2;b=3;D=8",
        maxColourValue: 4,
        minColourValue: 1,
        preset: "brusselator",
        reactionStrU: "a+u^2*v-(b+1)*u",
        reactionStrV: "b*u-u^2*v",
        reactionStrW: "0",
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "CahnHilliard":
	options = {
	"algebraicV": true,
	"brushRadius": 5,
	"clearValueU": "tanh(30*(RAND-0.5))",
	"crossDiffusion": true,
	"diffusionStrUU": "r*D*(3*u^2-1)",
	"diffusionStrUV": "r*-D",
	"diffusionStrVU": "r*D*a",
	"diffusionStrVV": "0",
	"diffusionStrWW": "0",
	"domainScale": 100,
	"dt": 0.0005,
	"fixRandSeed": true,
	"kineticParams": "a=1;r=0.01;D=1;",
	"minColourValue": -1,
	"preset": "CahnHilliard",
	"reactionStrU": "r*u*(1-u^2)",
	"reactionStrV": "0",
	"reactionStrW": "0",
	"spatialStep": 0.5,
	"squareCanvas": true,
	"whatToDraw": "u",
	"whatToPlot": "u",
};
break;

    case "cyclicCompetition":
	options = {
	"boundaryConditionsU": "neumann",
	"boundaryConditionsV": "neumann",
	"boundaryConditionsW": "neumann",
	"brushRadius": 0,
	"clearValueU": "0.1*RAND+x/100",
	"clearValueV": "0.1*(1+RAND)",
	"clearValueW": "0.1*(1+RAND)",
	"diffusionStrUU": "2",
	"diffusionStrVV": "0.5",
	"diffusionStrWW": "0.5",
	"domainScale": 500,
	"dt": 0.007,
	"fixRandSeed": true,
	"kineticParams": "a=0.8;b=1.9",
	"numSpecies": "3",
	"preset": "cyclicCompetition",
	"reactionStrU": "u*(1-u-a*v-b*w)",
	"reactionStrV": "v*(1-b*u-v-a*w)",
	"reactionStrW": "w*(1-a*u-b*v-w)",
	"spatialStep": 2,
	"whatToDraw": "u",
	"whatToPlot": "u",
	"diffusionUStr": "0.000001",
	"diffusionVStr": "0.00004",
	"diffusionWStr": "0.000008",
	"diffusionU": 0.000001,
	"diffusionV": 0.00004,
	"diffusionW": 0.000008, 
};
break;
    case "chemicalBasisOfMorphogenesis":
	options = {
	"brushRadius": 5,
	"clearValueU": "3.5*(1-T)",
	"clearValueV": "1",
	"colourmap": "viridis",
	"diffusionStrUU": "0.1",
	"diffusionStrVV": "1",
	"diffusionStrWW": "0",
	"domainScale": 100,
	"dt": 0.001,
	"imagePathTwo": "./images/chemicalBasisOfMorphogenesis.png",
	"kineticParams": "a=0.01;b=0.8;",
	"maxColourValue": 3.5,
	"preset": "chemicalBasisOfMorphogenesis",
	"resetOnImageLoad": true,
	"renderSize": 652,
	"reactionStrU": "a - u + u^2*v",
	"reactionStrV": "b - u^2*v",
	"reactionStrW": "0",
	"runningOnLoad": false,
	"showAllOptionsOverride": true,
	"spatialStep": 0.15,
	"squareCanvas": true,
	"tryClickingText": "Press play!",
	"whatToDraw": "u",
	"whatToPlot": "u",
};
break;
		  
	case "lambdaOmega":
	options = {
	"brushValue": "2",
	"brushRadius": 1,
	"clearValueU": "sin(2*pi*x/100)*sin(2*pi*y/100)",
	"diffusionStrUU": "0.2",
	"diffusionStrVV": "1",
	"diffusionStrWW": "0",
	"domainScale": 100,
	"dt": 0.001,
	"fixRandSeed": true,
	"kineticParams": "a=3;c=-1;n=0;m=0;",
	"maxColourValue": 3.1,
	"numTimestepsPerFrame": 50,
	"preset": "lambdaOmega",
	"reactionStrU": "a*u-(u+c*v)*(u^2+v^2)",
	"reactionStrV": "a*v+(c*u-v)*(u^2+v^2)",
	"reactionStrW": "0",
	"spatialStep": 0.2,
	"whatToDraw": "u",
	"whatToPlot": "u^2+v^2",
	"constantDiffusion": false,
};
break;
		  
    case "complexGinzburgLandau":
      options = {
        brushValue: "0",
        brushRadius: 0.02,
        clearValueU: "RAND*sin(3.14*7*x)*cos(3.14*7*y)",
        clearValueV: "RAND*sin(3.14*7*x)*cos(3.14*7*y)",
        crossDiffusion: true,
        diffusionStrUU: "0.00001",
        diffusionStrVV: "0.0001",
        diffusionStrWW: "0",
        dt: 0.001,
        fixRandSeed: true,
        kineticParams: "a=3;c=-1",
        maxColourValue: 3.1,
        numTimestepsPerFrame: 50,
        preset: "complexGinzburgLandau",
        reactionStrU: "a*u-(u+c*v)*(u^2+v^2)",
        reactionStrV: "a*v+(c*u-v)*(u^2+v^2)",
        reactionStrW: "0",
        spatialStep: 0.002,
        whatToDraw: "u",
        whatToPlot: "u^2+v^2",
        constantDiffusion: false,
      };
      break;

    case "GiererMeinhardt":
      options = {
	"brushRadius": 2,
        clearValueV: "1",
        diffusionStrUU: "1",
        diffusionStrVV: "D",
        diffusionStrWW: "0",
	"domainScale": 100,
        dt: 0.0005,
        kineticParams: "a=0.5;b=1;c=6.1;D=100",
	"maxColourValue": 24,
	"minColourValue": 0.6,
        preset: "GiererMeinhardt",
        reactionStrU: "a+u^2/v-b*u",
        reactionStrV: "u^2-c*v",
        reactionStrW: "0",
	"spatialStep": 0.5,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;
case "GiererMeinhardtStripeICs":
	options = {
	"boundaryConditionsU": "neumann",
	"boundaryConditionsV": "neumann",
	"brushValue": "1.01*u",
	"brushRadius": 2,
	"clearValueU": "3*(1+cos(n*pi*x/100))",
	"clearValueV": "1",
	"diffusionStrUU": "1",
	"diffusionStrVV": "D",
	"diffusionStrWW": "0",
	"domainScale": 100,
	"dt": 0.0005,
	"kineticParams": "a=0.5;b=1;c=6.1;D=100;n=6;",
	"maxColourValue": 24,
	"minColourValue": 0.6,
	"numTimestepsPerFrame": 200,
	"preset": "GiererMeinhardtStripeICs",
	"reactionStrU": "a+u^2/v-b*u",
	"reactionStrV": "u^2-c*v",
	"reactionStrW": "0",
	"spatialStep": 0.5,
	"whatToDraw": "u",
	"whatToPlot": "u",
};
break;
	case "GiererMeinhardtStripes":
      	options = {
	"brushRadius": 2,
        clearValueV: "1",
        diffusionStrUU: "1",
        diffusionStrVV: "D",
        diffusionStrWW: "0",
	"domainScale": 200,
        dt: 0.0005,
        kineticParams: "a=0.5;b=1;c=6.1;K=0.003;D=100",
        maxColourValue: 9,
        minColourValue: 1.5,
	"numTimestepsPerFrame": 200,
        preset: "GiererMeinhardtStripes",
        reactionStrU: "a+u^2/(v*(1+K*u^2))-b*u",
        reactionStrV: "u^2-c*v",
        reactionStrW: "0",
	"spatialStep": 0.5,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;
	case "GMHeterogeneous2D":
	options = {
	"autoSetColourRange": true,
	"boundaryConditionsU": "dirichlet",
	"brushRadius": 2,
	"clearValueV": "1",
	"diffusionStrUU": "1",
	"diffusionStrVV": "D",
	"diffusionStrWW": "0",
	"domainScale": 100,
	"dt": 0.0005,
	"kineticParams": "a=1;b=1.5;c=6.1;D=55;B=0;A=0;",
	"maxColourValue": 12.804131507873535,
	"numTimestepsPerFrame": 200,
	"preset": "GMHeterogeneous2D",
	"reactionStrU": "(a+A*x/100)+u^2/v-(b+B*x/100)*u",
	"reactionStrV": "u^2-c*v",
	"reactionStrW": "0",
	"spatialStep": 0.5,
	"squareCanvas": true,
	"whatToDraw": "u",
	"whatToPlot": "u",
};
break;
		  
	case "GMHeterogeneousOscillationsMixedBCs":
	options = {
	"boundaryConditionsU": "dirichlet",
	"boundaryConditionsV": "neumann",
	"brushRadius": 1,
	"cameraTheta": 0.5,
	"cameraPhi": 0,
	"cameraZoom": 0.76,
	"clearValueU": "1",
	"clearValueV": "1",
	"diffusionStrUU": "1",
	"diffusionStrVV": "D",
	"diffusionStrWW": "0",
	"dirichletStrV": "1.8",
	"domainScale": 50,
	"dt": 0.0005,
	"kineticParams": "a=0.95;b=1.6;c=3;D=55;B=5;",
	"maxColourValue": 5,
	"numTimestepsPerFrame": 400,
	"oneDimensional": true,
	"preset": "GMHeterogeneousOscillationsMixedBCs",
	"reactionStrU": "a+u^2/v-b*u-B*(x/55)*u",
	"reactionStrV": "u^2-c*v",
	"reactionStrW": "0",
	"spatialStep": 0.25,
	"squareCanvas": true,
	"threeD": true,
	"timeDisplay": true,
	"whatToDraw": "u",
	"whatToPlot": "u",
};
break;
case "GMHeterogeneousOscillationsDirichletBCs":
	options = {
	"boundaryConditionsU": "dirichlet",
	"boundaryConditionsV": "dirichlet",
	"brushRadius": 0,
	"cameraTheta": 0.5,
	"cameraPhi": 0,
	"cameraZoom": 0.76,
	"clearValueU": "1",
	"clearValueV": "1",
	"diffusionStrUU": "1",
	"diffusionStrVV": "D",
	"diffusionStrWW": "0",
	"dirichletStrV": "2",
	"domainScale": 70,
	"dt": 0.0005,
	"kineticParams": "a=0.95;b=1.6;c=3;D=55;B=4;",
	"maxColourValue": 5,
	"numTimestepsPerFrame": 400,
	"oneDimensional": true,
	"preset": "GMHeterogeneousOscillationsDirichletBCs",
	"reactionStrU": "a+u^2/v-b*u-B*(x/55)*u",
	"reactionStrV": "u^2-c*v",
	"reactionStrW": "0",
	"spatialStep": 0.25,
	"squareCanvas": true,
	"threeD": true,
	"timeDisplay": true,
	"whatToDraw": "u",
	"whatToPlot": "u",
};
break;
    case "FitzHugh-Nagumo":
      options = {
        brushValue: "0",
        brushRadius: 14,
        clearValueU: "0*RAND",
        diffusionStrUU: "1",
        diffusionStrVV: "D",
        diffusionStrWW: "0",
        domainScale: 280,
        dt: 0.001,
        fixRandSeed: true,
        kineticParams: "ev=0.5;av=1;az=-0.1;D=20;",
        minColourValue: -1,
        numSpecies: "2",
        preset: "FitzHugh-Nagumo",
        reactionStrU: "u-u^3-v",
        reactionStrV: "ev*(u-av*v-az)",
        reactionStrW: "0",
        spatialStep: 1.4,
        squareCanvas: true,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "FitzHugh-Nagumo-Hopf":
      options = {
        brushValue: "0",
        brushRadius: 14,
        clearValueU: "cos(m*x*pi/280)*cos(m*y*pi/280)",
        diffusionStrUU: "1",
        diffusionStrVV: "D",
        diffusionStrWW: "0",
        domainScale: 280,
        dt: 0.001,
        fixRandSeed: true,
        kineticParams: "m=4;ev=0.2;av=.01;az=-0.1;D=26;",
        minColourValue: -1,
        numSpecies: "2",
        preset: "FitzHugh-Nagumo-Hopf",
        reactionStrU: "u-u^3-v",
        reactionStrV: "ev*(u-av*v-az)",
        reactionStrW: "0",
        spatialStep: 1.4,
        squareCanvas: true,
        suppressTryClickingPopup: true,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "FitzHugh-Nagumo-3":
      options = {
        brushValue: "0",
        brushRadius: 12.6,
        clearValueU: "5*(1-sin(pi*x/340)*sin(pi*y/340))^3",
        diffusionStrUU: "1",
        diffusionStrVV: "Dv",
        diffusionStrWW: "Dw",
        domainScale: 340,
        dt: 0.001,
        fixRandSeed: true,
        kineticParams: "m=4;ev=0.2;ew=1;av=.065;aw=0.5;az=-0.1;Dv=40;Dw=200",
        minColourValue: -1,
        numSpecies: "3",
        preset: "FitzHugh-Nagumo-3",
        reactionStrU: "u-u^3-v",
        reactionStrV: "ev*(u-av*v-aw*w-az)",
        reactionStrW: "ew*(u-w)",
        spatialStep: 1.8,
        squareCanvas: true,
        suppressTryClickingPopup: true,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "KellerSegel":
      options = {
        brushValue: "RAND",
        brushRadius: 5.6000000000000005,
        clearValueU: "0.01*RAND",
        crossDiffusion: true,
        diffusionStrUU: "1",
        diffusionStrUV: "-c*u/(1+u^2)",
        diffusionStrVV: "D",
        diffusionStrWW: "0",
        domainScale: 100,
        dt: 0.005,
        kineticParams: "D=1;c=4;a=0.1;",
        maxColourValue: 2.5,
        minColourValue: 0.0004821050970349461,
        preset: "KellerSegel",
        reactionStrU: "u*(1-u)",
        reactionStrV: "u-a*v",
        reactionStrW: "0",
        spatialStep: 0.2,
        suppressTryClickingPopup: true,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "KellerSegelHeart":
      options = {
        boundaryConditionsU: "dirichlet",
        boundaryConditionsV: "dirichlet",
        brushValue: "RAND",
        brushRadius: 5.5,
        clearValueU: "0.001",
        crossDiffusion: true,
        diffusionStrUU: "1",
        diffusionStrUV: "-c*u/(1+u^2)",
        diffusionStrVV: "D",
        diffusionStrWW: "0",
        domainIndicatorFun:
          "(((x-140)/80)^2 + ((y-140)/80)^2 - 1)^3 - ((x-140)/80)^2*((y-140)/80)^3 < 0",
        domainScale: 280,
        domainViaIndicatorFun: true,
        dt: 0.005,
        kineticParams: "D=1;c=4;a=0.1;",
        maxColourValue: 2.5,
        minColourValue: 0.0004821050970349461,
        preset: "KellerSegelHeart",
        reactionStrU: "u*(1-u)",
        reactionStrV: "u-a*v",
        reactionStrW: "0",
        spatialStep: 0.5,
        squareCanvas: true,
        suppressTryClickingPopup: true,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "KuramotoSivashinsky":
      options = {
        algebraicV: true,
        autoSetColourRange: true,
        brushValue: "-44",
        brushRadius: 2,
        clearValueU: "-45",
        crossDiffusion: true,
        diffusionStrUU: "-1-u",
        diffusionStrUV: "-1",
        diffusionStrVU: "1",
        diffusionStrVV: "0",
        diffusionStrWW: "0",
        domainScale: 150,
        dt: 0.001,
        kineticParams: "a=0.03;",
        maxColourValue: -15.152745246887207,
        minColourValue: -16.152745246887207,
        numSpecies: "2",
        preset: "KuramotoSivashinsky",
        reactionStrU: "u*v-a*u",
        reactionStrV: "0",
        reactionStrW: "0",
        spatialStep: 0.5,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "KuramotoSivashinsky3D":
      options = {
        algebraicV: true,
        autoSetColourRange: true,
        brushValue: "-44",
        brushRadius: 2,
        clearValueU: "-45",
        crossDiffusion: true,
        diffusionStrUU: "-1-u",
        diffusionStrUV: "-1",
        diffusionStrVU: "1",
        diffusionStrVV: "0",
        diffusionStrWW: "0",
        domainScale: 150,
        drawIn3D: true,
        dt: 0.001,
        kineticParams: "a=0.03;",
        maxColourValue: -25.7167911529541,
        minColourValue: -37.65152359008789,
        numSpecies: "2",
        preset: "KuramotoSivashinsky3D",
        reactionStrU: "u*v-a*u",
        reactionStrV: "0",
        reactionStrW: "0",
        spatialStep: 0.5,
        threeD: true,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;



    case "localisedPatterns":
      options = {
        brushValue: "9",
        brushRadius: 0.1,
        clearValueU: "1",
        clearValueV: "0.99",
        diffusionStrUU: "0.0010",
        diffusionStrVV: "0.5",
        diffusionStrWW: "0",
        domainScale: 10,
        dt: 0.000625,
        maxColourValue: 9,
        minColourValue: 2,
        numTimestepsPerFrame: 200,
        preset: "localisedPatterns",
        renderSize: 700,
        reactionStrU: "(1+tanh(1*((x-5)*(x-5)+(y-5)*(y-5)-20)))-u+u^2*v",
        reactionStrV: "0.99 - u^2*v",
        reactionStrW: "0",
        spatialStep: 0.05,
        squareCanvas: true,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;
    case "thresholdSimulation":
      options = {
        boundaryConditionsU: "neumann",
        brushRadius: 0.005,
        diffusionStrUU: "0.0001",
        diffusionStrVV: "0",
        diffusionStrWW: "0",
        dt: 0.002,
        numSpecies: 1,
        numTimestepsPerFrame: 200,
        preset: "thresholdSimulation",
        renderSize: 700,
        reactionStrU: "u*(1-u)*(u-0.4)",
        reactionStrV: "0",
        reactionStrW: "0",
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "harshEnvironment":
      options = {
        boundaryConditionsU: "neumann",
        clearValueU: "0.1*exp(-10000*RAND)",
        diffusionStrUU: "0.00004",
        diffusionStrVV: "0",
        diffusionStrWW: "0",
        dt: 0.0001,
        kineticParams: "K=1",
        numSpecies: 1,
        preset: "harshEnvironment",
        reactionStrU: "u*(1-u/K)",
        reactionStrV: "0",
        reactionStrW: "0",
        squareCanvas: true,
        suppressTryClickingPopup: true,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "inhomogHeatEquation":
      options = {
        boundaryConditionsU: "neumann",
        brushRadius: 0,
        clearValueU: "0",
        diffusionStrUU: "D",
        diffusionStrVV: "0",
        diffusionStrWW: "0",
        domainScale: 100,
        dt: 0.004,
        kineticParams: "n=4;m=4;D=1;",
        minColourValue: -1,
        numSpecies: 1,
        preset: "inhomogHeatEquation",
        reactionStrU: "cos(n*pi*x/100)*cos(m*pi*y/100)*D*pi^2*(n^2+m^2)/100^2",
        reactionStrV: "0",
        reactionStrW: "0",
        spatialStep: 0.5,
        squareCanvas: true,
        suppressTryClickingPopup: true,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "inhomogDiffusionHeatEquation":
      options = {
        boundaryConditionsU: "dirichlet",
        brushRadius: 5,
        clearValueU: "1",
        diffusionStrUU: "D*(1+E*cos(n*pi*(sqrt((x/100-0.5)^2+(y/100-0.5)^2))))",
        diffusionStrVV: "0",
        diffusionStrWW: "0",
        domainScale: 100,
        dt: 0.004,
        kineticParams: "D=1;E=0.99;n=40;",
        numSpecies: 1,
        preset: "inhomogDiffusionHeatEquation",
        reactionStrU: "0",
        reactionStrV: "0",
        reactionStrW: "0",
        spatialStep: 0.5,
        squareCanvas: true,
        suppressTryClickingPopup: true,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "inhomogWaveEquation":
      options = {
        boundaryConditionsU: "neumann",
        boundaryConditionsV: "neumann",
        brushRadius: 1,
        clearValueU: "0",
        clearValueV: "0",
        crossDiffusion: true,
        diffusionStrUU: "C*D",
        diffusionStrVU: "D*(1+E*sin(pi*m*x/100))*(1+E*sin(n*pi*y/100))",
        diffusionStrVV: "0",
        diffusionStrWW: "0",
        domainScale: 100,
        dt: 0.001,
        kineticParams: "D=1;m=9;n=9; C=0.01;E=0.97",
        preset: "inhomogWaveEquation",
        reactionStrU: "v",
        reactionStrV: "0",
        reactionStrW: "0",
        spatialStep: 0.5,
        squareCanvas: true,
        whatToPlot: "u",
      };
      break;
    case "dampedWaveEquation":
      options = {
        boundaryConditionsU: "dirichlet",
        boundaryConditionsV: "dirichlet",
        brushRadius: 2,
        clearValueU: "0",
        crossDiffusion: true,
        diffusionStrUU: "C*D",
        diffusionStrVU: "D",
        diffusionStrVV: "0",
        diffusionStrWW: "0",
        dirichletStrU: "cos(m*x*pi/100)*cos(m*y*pi/100)",
        domainScale: 100,
        dt: 0.002,
        kineticParams: "D=1;C=0.01;m=8;d=0;",
        minColourValue: -1,
        preset: "PRESETNAME",
        reactionStrU: "v",
        reactionStrV: "-d*v",
        reactionStrW: "0",
        spatialStep: 0.5,
        squareCanvas: true,
        whatToPlot: "u",
      };
      break;

    case "travellingWave":
      options = {
        boundaryConditionsU: "neumann",
        brushRadius: 0.049,
        clearValueU: "0.0",
        diffusionStrUU: "0.000001",
        diffusionStrVV: "0",
        diffusionStrWW: "0",
        dt: 0.002,
        numSpecies: 1,
        numTimestepsPerFrame: 200,
        preset: "travellingWave",
        renderSize: 700,
        reactionStrU: "u*(1-u)",
        reactionStrV: "0",
        reactionStrW: "0",
        typeOfBrush: "vline",
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;
    case "Alan":
      options = {
        boundaryConditionsU: "periodic",
        boundaryConditionsV: "periodic",
	brushRadius: 2,
        diffusionStrUU: "0.042",
        diffusionStrVV: "2",
	domainScale: 100,
        dt: 0.001,
        imagePathTwo: "./images/Alan.png",
        maxColourValue: 2.3,
        numTimestepsPerFrame: 200,
        preset: "Alan",
        renderSize: 652,
        reactionStrU: "(1-T) - u + u^2*v",
        reactionStrV: "1 - u^2*v",
        showAllOptionsOverride: true,
        spatialStep: 0.2,
        squareCanvas: true,
        suppressTryClickingPopup: true,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;
    case "heatEquation":
      options = {
        boundaryConditionsU: "neumann",
        brushRadius: 20,
        clearValueU: "0",
        diffusionStrUU: "1",
        diffusionStrVV: "0",
        diffusionStrWW: "0",
        domainScale: 320,
        dt: 0.01,
        numSpecies: 1,
        preset: "heatEquation",
        reactionStrU: "0",
        reactionStrV: "0",
        reactionStrW: "0",
        spatialStep: 1.5,
        squareCanvas: true,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "heatEquation1D":
      options = {
        boundaryConditionsU: "neumann",
        brushRadius: 20,
        cameraTheta: 0.5,
        cameraPhi: 0,
        cameraZoom: 1,
        clearValueU: "cos(m*pi*x/320)",
        diffusionStrUU: "1",
        diffusionStrVV: "0",
        diffusionStrWW: "0",
        domainScale: 320,
        dt: 0.01,
        kineticParams: "m=8;",
        minColourValue: -1,
        numSpecies: 1,
        oneDimensional: true,
        preset: "heatEquation1D",
        reactionStrU: "0",
        reactionStrV: "0",
        reactionStrW: "0",
        spatialStep: 1.5,
        squareCanvas: true,
        threeD: true,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "waveEquation":
      options = {
        brushRadius: 5,
        crossDiffusion: true,
        diffusionStrUU: "C*D",
        diffusionStrVU: "D",
        diffusionStrVV: "0",
        diffusionStrWW: "0",
        domainScale: 100,
        boundaryConditionsU: "neumann",
        boundaryConditionsV: "neumann",
        dt: 0.002,
        kineticParams: "D=1; C=0.01",
        preset: "waveEquation",
        reactionStrU: "v",
        reactionStrV: "0",
        reactionStrW: "0",
        spatialStep: 0.5,
        squareCanvas: true,
      };
      break;

    case "waveEquationICs":
      options = {
        boundaryConditionsU: "neumann",
        boundaryConditionsV: "neumann",
        brushRadius: 5,
        clearValueU: "cos(n*pi*x/100)*cos(m*pi*y/100)",
        crossDiffusion: true,
        diffusionStrUU: "C*D",
        diffusionStrVU: "D",
        diffusionStrVV: "0",
        diffusionStrWW: "0",
        domainScale: 100,
        dt: 0.001,
        kineticParams: "D=1;C=0;n=4;m=4;",
        minColourValue: -1,
        preset: "waveEquationICs",
        reactionStrU: "v",
        reactionStrV: "0",
        reactionStrW: "0",
        spatialStep: 0.5,
        squareCanvas: true,
	suppressTryClickingPopup: true,
        whatToPlot: "u",
      };
      break;
	case "waveEquation1D":
	options = {
	"boundaryConditionsU": "neumann",
	"boundaryConditionsV": "neumann",
	"brushRadius": 5,
	"cameraTheta": 0.5,
	"cameraPhi": 0,
	"clearValueU": "exp(-(35*pi)*(x/100-0.5)^2)",
	"crossDiffusion": true,
	"diffusionStrUU": "C*D",
	"diffusionStrVU": "D",
	"diffusionStrVV": "0",
	"diffusionStrWW": "0",
	"domainScale": 100,
	"dt": 0.002,
	"kineticParams": "D=1; C=0.01",
	"oneDimensional": true,
	"preset": "waveEquation1D",
	"reactionStrU": "v",
	"reactionStrV": "0",
	"reactionStrW": "0",
	"spatialStep": 0.5,
	"squareCanvas": true,
	suppressTryClickingPopup: true,
	"threeD": true,
	"whatToPlot": "u",
};
break;
		  
	case "waveEquation3D":
	options = {
	"boundaryConditionsU": "neumann",
	"boundaryConditionsV": "neumann",
	"brushRadius": 5,
	"cameraTheta": 31.171766170073973,
	"cameraPhi": 6.119583405771913,
	"clearValueU": "exp(-(35*pi)*(x/100-0.5)^2)*exp(-(35*pi)*(y/100-0.5)^2)",
	"crossDiffusion": true,
	"diffusionStrUU": "C*D",
	"diffusionStrVU": "D",
	"diffusionStrVV": "0",
	"diffusionStrWW": "0",
	"domainScale": 100,
	"dt": 0.002,
	"kineticParams": "D=1; C=0.01",
	"preset": "waveEquation3D",
	"reactionStrU": "v",
	"reactionStrV": "0",
	"reactionStrW": "0",
	"spatialStep": 0.5,
	"squareCanvas": true,
	"threeD": true,
	"whatToPlot": "u",
};
break;

    case "Schnakenberg":
      options = {
	brushRadius: 2,
        clearValueU: "a + b",
        clearValueV: "b / (a+b)^2",
        diffusionStrUU: "1",
        diffusionStrVV: "D",
        diffusionStrWW: "0",
	domainScale: 100,
        dt: 0.0005,
        kineticParams: "a = 0.01;b = 2;D=100",
        maxColourValue: 8,
        minColourValue: 0,
	numTimestepsPerFrame: 200,
        preset: "Schnakenberg",
        reactionStrU: "a - u +u^2*v",
        reactionStrV: "b - u^2*v",
        reactionStrW: "0",
	spatialStep: 0.5,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "SchnakenbergHopf":
      options = {
        brushRadius: 2,
        clearValueU: "a+b",
        clearValueV: "b/(a+b)^2",
        diffusionStrUU: "1",
        diffusionStrVV: "D",
        diffusionStrWW: "0",
	domainScale: 100,
        dt: 0.001,
        kineticParams: "a = 0.05; b = 0.4;D=8",
        maxColourValue: 3.5,
        numTimestepsPerFrame: 200,
        preset: "SchnakenbergHopf",
        reactionStrU: "a - u +u^2*v",
        reactionStrV: "b - u^2*v",
        reactionStrW: "0",
        spatialStep: 0.5,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "plateEquation":
      options = {
        suppressTryClickingPopup: true,
        algebraicW: true,
        brushValue: "-8",
        boundaryConditionsU: "dirichlet",
        boundaryConditionsV: "dirichlet",
        boundaryConditionsW: "dirichlet",
        clearValueU: "-4",
        crossDiffusion: true,
        diffusionStrUU: "Dc*D",
        diffusionStrVV: "0",
        diffusionStrVW: "-D",
        diffusionStrWU: "D",
        diffusionStrWW: "0",
	domainScale: 100,
        dt: 0.0001,
        kineticParams: "D=10;q=0.003;C=0.1;Dc=0.1",
        maxColourValue: 0,
        minColourValue: -8,
        numSpecies: "3",
        preset: "plateEquation",
        reactionStrU: "v",
        reactionStrV: "-q-C*v",
        reactionStrW: "0",
	spatialStep: 0.5,
        squareCanvas: true,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    case "plateEquation3D":
      options = {
        algebraicW: true,
        boundaryConditionsU: "dirichlet",
        boundaryConditionsV: "dirichlet",
        boundaryConditionsW: "dirichlet",
	brushRadius: 2,
        brushValue: "-8",
        cameraTheta: 131.97379772425356,
        cameraPhi: -156.79802955664945,
        clearValueU: "0",
        crossDiffusion: true,
        diffusionStrUU: "Dc*D",
        diffusionStrVV: "0",
        diffusionStrVW: "-D",
        diffusionStrWU: "D",
        diffusionStrWW: "0",
	domainScale: 100,
        drawIn3D: true,
        dt: 0.0001,
        kineticParams: "D=10;q=0.000;C=0.1;Dc=0.1;",
        minColourValue: -3,
        numSpecies: "3",
        preset: "plateEquation3D",
        reactionStrU: "v",
        reactionStrV: "-q-C*v",
        reactionStrW: "0",
	spatialStep: 0.5,
        squareCanvas: true,
        threeD: true,
        whatToDraw: "u",
        whatToPlot: "u",
        undefined: true,
      };
      break;

    case "stabilizedSchrodingerEquation":
      options = {
        boundaryConditionsU: "dirichlet",
        boundaryConditionsV: "dirichlet",
        brushRadius: 0.01,
        clearValueU: "sin(n*pi*x/100)*sin(m*pi*y/100)",
        crossDiffusion: true,
        diffusionStrUU: "C*D",
        diffusionStrUV: "-D",
        diffusionStrVU: "D",
        diffusionStrVV: "C*D",
        diffusionStrWW: "0",
        domainScale: 100,
        dt: 0.0001,
        kineticParams: "D=1; C=0.004;n=3;m=3",
        preset: "stabilizedSchrodingerEquation",
        reactionStrU: "0",
        reactionStrV: "0",
        reactionStrW: "0",
        squareCanvas: true,
        spatialStep: 0.5,
        whatToDraw: "u",
        whatToPlot: "u^2+v^2",
      };
      break;

    case "stabilizedSchrodingerEquationPotential":
      options = {
        autoSetColourRange: true,
        boundaryConditionsU: "dirichlet",
        boundaryConditionsV: "dirichlet",
        brushRadius: 0.01,
        clearValueU: "(sin(pi*x/100)*sin(pi*y/100))^10",
        crossDiffusion: true,
        diffusionStrUU: "C*D",
        diffusionStrUV: "-D",
        diffusionStrVU: "D",
        diffusionStrVV: "C*D",
        diffusionStrWW: "0",
        domainScale: 100,
        dt: 0.0001,
        kineticParams: "D=1; C=0.004;n=15;m=15",
        maxColourValue: 1.5228073596954346,
        preset: "stabilizedSchrodingerEquationPotential",
        reactionStrU: "-sin(n*pi*x/100)*sin(m*pi*y/100)*v",
        reactionStrV: "sin(n*pi*x/100)*sin(m*pi*y/100)*u",
        reactionStrW: "0",
        spatialStep: 0.5,
        squareCanvas: true,
        whatToDraw: "u",
        whatToPlot: "u^2+v^2",
      };
      break;
	case "stabilizedSchrodinger1D":
	options = {
	"boundaryConditionsU": "dirichlet",
	"boundaryConditionsV": "dirichlet",
	"brushRadius": 0,
	"cameraTheta": 0.5,
	"cameraPhi": 0,
	"clearValueU": "exp(-(0.5*pi/s^2)*(x/100-x0)^2)*cos(a*x)/N",
	"clearValueV": "exp(-(0.5*pi/s^2)*(x/100-x0)^2)*sin(a*x)/N",
	"crossDiffusion": true,
	"diffusionStrUU": "C*D",
	"diffusionStrUV": "-D",
	"diffusionStrVU": "D",
	"diffusionStrVV": "C*D",
	"diffusionStrWW": "0",
	"domainScale": 100,
	"dt": 0.0001,
	"integrate": true,
	"kineticParams": "D=1;C=0.0007;a=4;s=0.08;x0=0.5;V=100;N=2.8279;d=0.000;",
	"maxColourValue": 0.9,
	"numTimestepsPerFrame": 400,
	"oneDimensional": true,
	"preset": "stabilizedSchrodinger1D",
	"reactionStrU": "V*v*(x/100-0.5)^2",
	"reactionStrV": "-V*u*(x/100-0.5)^2",
	"reactionStrW": "0",
	"spatialStep": 0.35,
	"squareCanvas": true,
	"threeD": true,
	"timeDisplay": true,
	"whatToDraw": "u",
	"whatToPlot": "u^2+v^2",
};
break;

    case "subcriticalGS":
      options = {
        preset: "subcriticalGS",
        reactionStrU: "-u*v^2 + 0.037*(1.0 - u)",
        reactionStrV: "u*v^2 - (0.037+0.06)*v",
        whatToDraw: "v",
        whatToPlot: "v",
      };
      break;

    case "swiftHohenberg":
      options = {
        algebraicV: true,
        autoSetColourRange: true,
        boundaryConditionsU: "neumann",
        boundaryConditionsV: "neumann",
        crossDiffusion: true,
        diffusionStrUU: "0",
        diffusionStrUV: "-D",
        diffusionStrVU: "D",
        diffusionStrVV: "0",
        diffusionStrWW: "0",
        dt: 0.0005,
        kineticParams: "r=0.1;D=0.0001;a=1;b=1",
        maxColourValue: 1.44703209400177,
        minColourValue: -1.2287852764129639,
        numTimestepsPerFrame: 200,
        preset: "swiftHohenberg",
        renderSize: 512,
        reactionStrU: "(r-1)*u-2*v+a*u^2+b*u^3-u^5",
        reactionStrV: "0",
        reactionStrW: "0",
        squareCanvas: true,
        whatToDraw: "u",
        whatToPlot: "u",
      };
      break;

    default:
      options = {
        algebraicV: false,
        algebraicW: false,
        autoSetColourRange: false,
        backgroundColour: 0xffffff,
        boundaryConditionsU: "periodic",
        boundaryConditionsV: "periodic",
        boundaryConditionsW: "periodic",
        brushValue: "1",
        brushRadius: 1 / 20,
        cameraTheta: 30,
        cameraPhi: 30,
        cameraZoom: 0.8,
        clearValueU: "1.0",
        clearValueV: "0",
        clearValueW: "0",
        colourbar: false,
        colourmap: "turbo",
        crossDiffusion: false,
        diffusionStrUU: "0.000004",
        diffusionStrUV: "0",
        diffusionStrUW: "0",
        diffusionStrVU: "0",
        diffusionStrVV: "0.000002",
        diffusionStrVW: "0",
        diffusionStrWU: "0",
        diffusionStrWV: "0",
        diffusionStrWW: "0.000002",
        dirichletStrU: "0",
        dirichletStrV: "0",
        dirichletStrW: "0",
        domainIndicatorFun: "1",
        domainScale: 1,
        domainViaIndicatorFun: false,
        drawIn3D: false,
        dt: 0.1,
        fixRandSeed: false,
        forceManualInterpolation: false,
        imagePathOne: "./images/Alan.png",
        imagePathTwo: "./images/Alan.png",
        integrate: false,
        kineticParams: "",
        maxColourValue: 1.0,
        minColourValue: 0.0,
        neumannStrU: "0",
        neumannStrV: "0",
        neumannStrW: "0",
        numSpecies: 2,
        numTimestepsPerFrame: 100,
        oneDimensional: false,
        onlyExposeOptions: [],
        preset: "default",
        resetOnImageLoad: false,
        renderSize: 512,
        reactionStrU: "-u*v^2 + 0.037*(1.0 - u)",
        reactionStrV: "u*v^2 - (0.037+0.06)*v",
        reactionStrW: "u*v^2 - (0.037+0.06)*v",
        robinStrU: "0",
        robinStrV: "0",
        robinStrW: "0",
        runningOnLoad: true,
        showAllOptionsOverride: false,
        smoothingScale: 4,
        spatialStep: 1 / 200,
        squareCanvas: false,
        suppressTryClickingPopup: false,
        threeD: false,
        threeDHeightScale: 0.3,
        timeDisplay: false,
        tryClickingText: "Try clicking!",
        typeOfBrush: "circle",
        typesetCustomEqs: false,
        whatToDraw: "v",
        whatToPlot: "v",
      };
  }
  return options;
}
