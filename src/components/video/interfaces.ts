
  export interface Screenshot {
    path: string
    absolutePath: string
  }

  export interface VideoH264 {
    path: string
    absolutePath: string
    name: string
    ext: string
    codec?: any
    formatName: string
    formatLongName: string
    startTime: number
    duration: number
    size: number
    bitRate: number
    screenshots: Screenshot[]
  }

  export interface File {
    id: string
    videoH264: VideoH264
  }

  export interface VideoData {
    videoH264: VideoH264;
  }


