// presets.js

export function getPreset(id) {
  let options;
  switch (id) {
    case "subcriticalGS":
      options = {
        boundaryConditions: "periodic",
        brushValue: 1,
        brushRadius: 1 / 10,
        colourmap: "BlackGreenYellowRedWhite",
        domainScale: 1,
        dt: 0.1,
        Du: 0.000004,
        Dv: 0.000002,
        maxColourValueU: 1.0,
        minColourValueU: 0,
        maxColourValueV: 1.0,
        minColourValueV: 0,
        numSpecies: 2,
        numTimestepsPerFrame: 100,
        preset: "subcriticalGS",
        renderSize: 256,
        reactionStr: {
          F: "-u*v^2 + 0.037*(1.0 - u)",
          G: "u*v^2 - (0.037+0.06)*v",
        },
        spatialStep: 1 / 200,
        squareCanvas: false,
        typeOfBrush: "circle",
        whatToPlot: "v",
      };
      break;
    default:
      options = {
        boundaryConditionsU: "periodic",
        boundaryConditionsV: "periodic",
        brushValue: 1,
        brushRadius: 1 / 20,
        clearUValue: 0.0,
        clearVValue: 0.0,
        colourmap: "viridis",
        dirichletU: 0,
        dirichletV: 0,
        domainScale: 1,
        dt: 0.1,
        Du: 0.000004,
        Dv: 0.000002,
        maxColourValueU: 0.5,
        minColourValueU: 0,
        maxColourValueV: 0.5,
        minColourValueV: 0,
        numSpecies: 2,
        numTimestepsPerFrame: 100,
        preset: "default",
        renderSize: 256,
        reactionStr: {
          F: "-u*v^2 + 0.037*(1.0 - u)",
          G: "u*v^2 - (0.037+0.06)*v",
        },
        robinStr: {
          u: "0",
          v: "0",
        },
        spatialStep: 1 / 200,
        squareCanvas: false,
        typeOfBrush: "circle",
        whatToPlot: "v",
      };
  }
  return options;
}
