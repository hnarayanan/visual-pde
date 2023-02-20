---
layout: page
title: Bistable thresholds
lesson_number: 40
extract: a cubic reaction–diffusion system which exhibits several phenomena
equation: $\pd{u}{t}=\nabla^2 u+u(1-u)(u-a)$
---
We'll continue studying a cubic reaction–diffusion system which exhibits several phenomena involving bistability:

$$\pd{u}{t}=\nabla^2 u+u(1-u)(u-a),$$

where $a \in (0,1)$ is a given parameter.

1. Load the [interactive simulation](/sim/preset=harshEnvironment). TODO: modify json to initialise with Neumann.

1. Click within the box to visualise an initial population in a 'closed' environment (that is, using Neumann boundary conditions). Unlike the [heat equation](heat-equation), the total mass is not conserved due to the reaction, but instead the system goes to some uniform steady state profile.