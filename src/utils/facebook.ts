export interface PageFeed {
  data: PageFeedData[]
  paging: Paging
}

export interface PageFeedData {
  created_time: string
  message?: string
  id: string
  story?: string
}

export interface Paging {
  cursors: Cursors
}

export interface Cursors {
  before: string
  after: string
}

/*const pageFeedResponse = await fetch("https://graph.facebook.com/v19.0/209022185638437/feed?access_token=EAAQ0K7ZAxzBABOya8ikZAjEo1LInZB58Grxh3C8gZC9pwwyvZB2ZBIlQnoUpVAkZCdZAy1YOUocHrZAzmyptUGJBQrr60bQ5pPg2HpxqN1gYZBpIpWzZBkAaYbXz9ZBtUtjEptZBzOtjwbKAjy9tiPyZAzdDUhzhHcwmWyCWvOLlchZBtJkXbT2MMB9csFGXmzJ8lOLIv3Om2IH4TwGsFYLPxWR9o5kmIEZD")
const pageFeed: PageFeed = await pageFeedResponse.json()

const features = pageFeed.data.map(data => {
  const message = data.message
  const story = data.story

  return {
    title: '',
    description: message ?? story ?? '',
    icon: 'tabler:brand-tailwind',
  }
});*/