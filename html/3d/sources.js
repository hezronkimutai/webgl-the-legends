// Vertex shader program

const vsSource = `
 attribute vec4 aVertexPosition;
 attribute vec2 aTextureCoord;

 uniform mat4 uModelViewMatrix;
 uniform mat4 uProjectionMatrix;

 varying highp vec2 vTextureCoord;

 void main(void) {
   gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
   vTextureCoord = aTextureCoord;
 }
`;

// Fragment shader program

const fsSource = `
 varying highp vec2 vTextureCoord;

 uniform sampler2D uSampler;

 void main(void) {
   gl_FragColor = texture2D(uSampler, vTextureCoord);
 }
`;