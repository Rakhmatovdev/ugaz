import queryString from 'query-string';
import { useLocation } from 'react-router';
import { normalizeQueryParams } from '../../utils/normalize';


const useQuery = () => {
  const location = useLocation();
  const paramsObject = queryString.parse(location?.search, { arrayFormat: 'comma', parseBooleans: true });
  return normalizeQueryParams(paramsObject);
};

export default useQuery;
