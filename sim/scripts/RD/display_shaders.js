// display_shaders.js

export function fiveColourDisplay() {
  return `varying vec2 textureCoords;
    uniform sampler2D textureSource;
    uniform float minColourValue;
    uniform float maxColourValue;
    const float pi = 3.141592653589793;

    uniform vec4 colour1;
    uniform vec4 colour2;
    uniform vec4 colour3;
    uniform vec4 colour4;
    uniform vec4 colour5;
    uniform vec3 backgroundColour;
    

    void main()
    {   
        vec4 values = texture2D(textureSource, textureCoords);
        float value = values.r;
        float scaledValue = (value - minColourValue) / (maxColourValue - minColourValue);
        vec3 col = vec3(0.0, 0.0, 0.0);
        float a = 0.0;
        if (scaledValue <= colour1.a)
        {
            col = colour1.rgb;
        }
        if (scaledValue > colour1.a && scaledValue <= colour2.a)
        {
            a = (scaledValue - colour1.a)/(colour2.a - colour1.a);
            col = mix(colour1.rgb, colour2.rgb, a);
        }
        if(scaledValue > colour2.a && scaledValue <= colour3.a)
        {
            a = (scaledValue - colour2.a)/(colour3.a - colour2.a);
            col = mix(colour2.rgb, colour3.rgb, a);
        }
        if(scaledValue > colour3.a && scaledValue <= colour4.a)
        {
            a = (scaledValue - colour3.a)/(colour4.a - colour3.a);
            col = mix(colour3.rgb, colour4.rgb, a);
        }
        if(scaledValue > colour4.a && scaledValue <= colour5.a)
        {
            a = (scaledValue - colour4.a)/(colour5.a - colour4.a);
            col = mix(colour4.rgb, colour5.rgb, a);
        }
        if(scaledValue > colour5.a)
        {
            col = colour5.rgb;
        }
        gl_FragColor = vec4(col.r, col.g, col.b, values.a);
        
    }`;
}

export function largestSpeciesShader() {
  return `varying vec2 textureCoords;
      uniform sampler2D textureSource;
  
      void main()
      {   
          gl_FragColor = texture2D(textureSource, textureCoords);
      }`;
}

export function surfaceVertexShader() {
    return `varying vec2 textureCoords;
    uniform sampler2D textureSource;
    void main()
    {      
        textureCoords = uv;
        vec3 newPosition = position;
        newPosition.z += texture2D(textureSource, textureCoords).r;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }`
}