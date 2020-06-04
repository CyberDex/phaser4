import { FramebufferStackEntry, ShaderStackEntry } from './RenderPass';

import { IVertexBuffer } from '../buffers/IVertexBuffer';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { Rectangle } from '../../../geom/rectangle/Rectangle';

export interface IRenderPass
{
    renderer: IWebGLRenderer;
    count: number;
    prevCount: number;
    flushTotal: number;

    //  The maximum number of combined image units the GPU supports
    //  According to the WebGL spec the minimum is 8
    maxTextures: number;
    currentActiveTexture: number;
    startActiveTexture: number;
    tempTextures: WebGLTexture[];
    textureIndex: number[];

    //  FBO
    framebufferStack: FramebufferStackEntry[];
    currentFramebuffer: FramebufferStackEntry;

    //  VBO
    vertexBufferStack: IVertexBuffer[];
    currentVertexBuffer: IVertexBuffer;

    //  Shader
    shaderStack: ShaderStackEntry[];
    currentShader: ShaderStackEntry;

    //  Viewport
    viewportStack: Rectangle[];
    currentViewport: Rectangle;
}
