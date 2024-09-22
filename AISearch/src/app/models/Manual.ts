export interface VideoGameManual {
  score: number;
  Content: string | null | undefined;
  id: string;
  metadata_storage_name: string;
  metadata_storage_size: bigint;
  metadata_storage_path: string;
  metadata_content_type: string;

  highlights: string[] | undefined;
}
