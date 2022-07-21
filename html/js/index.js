var cubeRotation = 0.0;

main();

function main() {
  const canvas = document.querySelector("#glcanvas");
  const gl = canvas.getContext("webgl");

  if (!gl) { throw new Error("Unable to initialize WebGL. Your browser or machine may not support it."); }

  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
      textureCoord: gl.getAttribLocation(shaderProgram, "aTextureCoord"),
      // vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(
        shaderProgram,
        "uProjectionMatrix"
      ),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
      uSampler: gl.getUniformLocation(shaderProgram, "uSampler"),
    },
  };

  const buffers = initBuffers(gl);

  const texture = loadTexture(gl, "images/sea.jpg");
  const texture1 = loadTexture(gl, "images/a.jpg");
  const texture2 = loadTexture(gl, "images/b.jpg");
  const texture3 = loadTexture(gl, "images/cubetexture.png");
  const texture4 = loadTexture(gl, "images/chain.jpg");
  const texture5 = loadTexture(gl, "images/c.jpg");

  var then = 0;
  function render(now) {
    now *= 0.0005;
    const deltaTime = now - then;
    then = now;

    drawScene(gl, programInfo, buffers, deltaTime, texture, texture1, texture2, texture3, texture4, texture5);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}


