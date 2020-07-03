export interface Markdown {
  childMarkdownRemark:{
      html: string,
      wordCount?:{
          words:Number,
      },
      timeToRead?: number 

  }
}