export interface MarvelEvent {
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    urls: Array<Object>;
    modified: string;
    start: string;
    end: string;
    thumbnail: {
      path?: string;
      extension?: string;
    };
    creators: any;
    characters: any;
    stories: any;
    comics: any;
    series: any;
    next: any;
    previous: any;
  }
  