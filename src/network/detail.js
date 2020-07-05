import {request} from "./request";

export function getDetail(id) {
  return request({
    url: 'index.php/home/detail',
    params: {
      id
    }
  })
}

export function getSimilar() {
  return request({
    url: 'index.php/home/similar'
  })
}

export class Details {
  constructor(baseInfo) {
    this.title_img = baseInfo.title_img;
    this.title_text = baseInfo.title_text;
    this.desc = baseInfo.desc;
    this.price = baseInfo.price;
    this.comments = baseInfo.comments;
  }
}