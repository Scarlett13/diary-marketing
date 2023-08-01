import { SurveyFormProps } from '@/types';

export function getLocalSurveyId(surveys: string): SurveyFormProps {
  switch (surveys) {
    case 'early-surveys':
      return {
        success: true,
        formId: 'f7gPzgX4',
        title: 'Survey Kebutuhan Produk',
      };
      break;

    default:
      return {
        success: false,
      };
      break;
  }
}
