import { mapObjIndexed, trim } from 'ramda';

export const normalizeNumber = (num:any) => {
  if (typeof num === 'number') return num;
  return num && num.replace(/[^0-9]/g, '');
};

export const normalizeQueryParams = (values:any) => mapObjIndexed(
  (value) => (typeof value === 'string' ? trim(value) : value),
  values,
);

export const normalizeAttorneys = (attorneys:any, vehicleNumber:any) => attorneys.reduce((attorneyAcc:any, attorney:any) => {
  const normalizeWithMembers = attorney.members?.map((member:any) => ({
    ...attorney,
    members: null,
    member,
  }));
  const normalizeWithSubjects = normalizeWithMembers.map((newAttorney:any) => {
    const activeSubject = newAttorney.subjects?.find((subject:any) => subject?.vehicleNumber === vehicleNumber);
    return {
      ...newAttorney,
      subjects: null,
      subject: activeSubject,
    };
  });
  const normalizedAttorneys = [
    ...attorneyAcc,
    ...normalizeWithSubjects,
  ];
  return normalizedAttorneys
    .filter((normalAttorney) => normalAttorney?.member?.memberTypeId === 4 || normalAttorney?.member?.memberTypeId === 10 || normalAttorney?.member?.memberTypeId === 85);
}, []);
