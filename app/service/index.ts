import axios from 'axios';
import type { PageModel, PageItemModel } from '~/models';

axios.defaults.baseURL = 'https://2gtshonemmlvswaqfcepdjsbqy0rdwth.lambda-url.us-west-2.on.aws/';
axios.defaults.headers.common['Authorization'] = 'ZDY0MTg3ZDUtMTVlOS00ZDZmLTk5OTMtNzg2MGE2NGM2ZWZmOiBJZiB5b3Ugc2VlIHRoaXMsIGxldCBtZSBrbm93Lg==';

export async function fetchPages(): Promise<PageModel> {
  try {
    const response = await axios.get<PageModel>('/pages');
    return response.data;
  } catch (error) {
    console.error('Error fetching pages:', error);
    throw error;
  }
}

export async function getPageById(id: string): Promise<PageItemModel> {
  try {
    const response = await axios.get<PageItemModel>(`/pages/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error getting page by id:', error);
    throw error;
  }
}