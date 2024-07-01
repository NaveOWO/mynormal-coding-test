import { stringify } from 'qs';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRouter = () => {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      back(steps = 1) {
        navigate(-steps);
      },
      push(path: string, search?: any) {
        navigate({
          pathname: path,
          search: search ? stringify(search, { indices: false }) : undefined,
        });
      },
      replace(path: string) {
        navigate({ pathname: path }, { replace: true });
      },
    };
  }, [navigate]);
};
