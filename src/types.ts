export type Thumbnail = {
	url: string;
	width: number;
	height: number;
};

export type VideoThumbnail = {
	default: Thumbnail;
	medium: Thumbnail;
	high: Thumbnail;
};

export type Snippet = {
	publishedAt: string;
	publishTime: string;
	channelId: string;
	title: string;
	description: string;
	channelTitle: string;
	liveBroadcastContent: string;
	thumbnails: VideoThumbnail;
};

export type Video = {
	url: string;
	id: {
		videoId: string;
		channelId: string;
	};
	kind: string;
	snippet: Snippet;
};
