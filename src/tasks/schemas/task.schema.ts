import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Task precisa haver um titulo'],
      validate: {
        validator: (value: string) => typeof value === 'string',
        message: 'Titulo não está em formato de string',
      },
    },
    description: {
      type: String,
      validate: {
        validator: (value: string) => typeof value === 'string',
        message: 'Descrição não está em formato de string',
      },
      required: false,
    },
    dueDate: {
      type: String,
      validate: {
        validator: (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value), // regex pra validar o formato da data
        message: 'Data precisa vir no formato YYYY-MM-DD',
      },
      required: false,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);
