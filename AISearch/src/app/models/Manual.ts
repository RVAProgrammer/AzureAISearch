export interface VideoGameManual{
    score: number;
    Content: string | null | undefined;
    id: string;
    metadata_storage_name : string;
    metadata_storage_size: bigint;    
    highlights: string[] | undefined;


}