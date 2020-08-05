import { ConsultationForm } from './consultation-form';
import { FileConsultationForm } from './fileconsultationform';

export class ConsultationFormRequest {
  public consultationList: Array<ConsultationForm>;
  public listFiles: Array<FileConsultationForm>;
}
