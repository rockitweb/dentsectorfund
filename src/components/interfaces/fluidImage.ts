export interface Fluid {
  aspectRatio:number,
  sizes: string,
  src: string,
  srcSet: string,
  tracedSvg: string
}

 export interface Svg {
            content
            absolutePath
            dataURI
            relativePath
          }
  export interface File {
    url;
    contentType;
  }

  export default interface FluidImage {
      fluid: Fluid,
      file: File,
      svg: Svg,
      title?: string,
  }