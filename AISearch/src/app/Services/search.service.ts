import { Injectable } from '@angular/core';
import {
  AzureKeyCredential,
  SearchClient,
  SearchResult,
  SelectFields,
} from '@azure/search-documents';
import { VideoGameManual } from '../models/Manual';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  async search(searchTerm: string | undefined): Promise<VideoGameManual[]> {
    const keyCred = new AzureKeyCredential('');

    const selectFields: SelectFields<VideoGameManual>[] = [
      'Content',
      'id',
      'metadata_storage_name',
      'metadata_storage_size',
      'metadata_content_type',
      'metadata_storage_path',
    ];

    const client = new SearchClient(
      'https://azuresearch-rvajs.search.windows.net',
      'video-game-manuals',
      keyCred
    );

    const results = await client.search(searchTerm, {
      select: selectFields,
      searchFields: ['Content'],
      includeTotalCount: true,
      highlightFields: 'Content',
      highlightPostTag: '</b>',
      highlightPreTag: '<b>',
    });

    let searchResults: VideoGameManual[] = [];

    for await (const result of results.results) {
      console.log(result);
      var manual = <VideoGameManual>result.document;
      manual.score = result.score;

      if (result.highlights !== undefined) {
        const highlights = result.highlights;
        if (highlights) {
          Object.keys(highlights).forEach((key) => {
            const highlightContent = highlights[key];
            manual.highlights = highlightContent;
          });
        }
      }

      searchResults.push(manual);
    }

    return searchResults;
  }
}
