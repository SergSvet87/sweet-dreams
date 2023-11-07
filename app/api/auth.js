import { instance } from '@/utils/client.js';
import { createEffect } from 'effector-next';
import { toast } from 'react-toastify';

export const singInFx = createEffect(async ([url, email, password]) => {
  const { data } = await instance.post(url, (email, password));

  if (data.warningMessage) {
    toast.warning(data.warningMessage);
    return;
  }

  toast.success('Вхід виконаний!');

  return data;
});
