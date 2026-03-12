export interface IReview {
  id: string;
  rating: number;
  comment: string;
  isApproved: boolean; // It need to be approve/reject by creator

  isVerifiedClient: boolean;
  reviewerLinkedInUrl?: string;
  reviewerImage?: string;
  projectSource?: string;

  spaceId: string;
  reviewerId: string;
}
