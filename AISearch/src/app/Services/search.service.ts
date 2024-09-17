import { Injectable } from '@angular/core';
import { AzureKeyCredential, SearchClient, SearchResult, SelectFields } from '@azure/search-documents';
import { VideoGameManual } from '../models/Manual';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  async search(searchTerm: string | undefined) {
    const keyCred = new AzureKeyCredential(
      'VatVr53R7fkf8yrgU6VFQqfyrcUv3yEdVEMDSogBzVAzSeDD7beW'
    );

    const selectFields :SelectFields<VideoGameManual> []= ["Content", 'id', 'metadata_storage_name',  'metadata_storage_size']

    const client = new SearchClient(
      'https://aisearch-rvajs.search.windows.net',
      'video-game-index',
      keyCred
    );

    const results  = await client.search(searchTerm, {
      select:     selectFields,
      searchFields: ["Content"],
      includeTotalCount: true
    });

    for await (const result of results.results){
      var manuel = <VideoGameManual> result.document;
      console.log(manuel.metadata_storage_name);
    }
  }
}
