// 共通のActionState型
export type ActionState<T = never> = {
  error?: {
    message: string;
    field?: string;
  };
  success?: {
    message: string;
  };
  data?: T;
} | null;