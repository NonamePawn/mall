import {request} from "./request";

export function banner() {
  return request({
    url: 'index.php/home/banner'
  })
}

export function recommend() {
  return request({
    url: 'index.php/home/recommend'
  })
}

export function getGoods(type, page) {
  return request({
    url: 'index.php/home/goods',
    params: {
      type,
      page
    }
  })
}