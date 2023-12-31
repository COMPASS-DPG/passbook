import { AssessmentDBSchema } from '@prismaClient/userType';
import axios from 'axios';
import { useEffect, useState } from 'react';

const fetchData = async (id: string) => {
  // for testing use this id: did:rcw:eefe1ee3-4164-44f7-9a85-be82f6393cf4

  try {
    const data = await axios.get(
      `${process.env.NEXT_PUBLIC_CREDENTIAL_URL}/${id}`,
      {
        headers: {
          templateId: 'cloe1mlyx0006s73wq6u08e3g',
          Accept: ' text/html',
        },
      }
    );
    return data.data;
  } catch (error) {
    return null;
  }
};

const useCertificates = (assessment: AssessmentDBSchema[] | undefined) => {
  const [certificates, setCertificates] = useState<string[]>([]);

  // will fetch all the certificate of user
  const handleFetch = async (assessment: AssessmentDBSchema[] | undefined) => {
    const promises: Promise<string>[] | undefined = assessment?.map((data) =>
      fetchData(data?.certificateId)
    );
    if (promises) {
      // will resolve all promises
      const data = await Promise?.all(promises);
      setCertificates(data?.filter((item: string) => item !== null) ?? []);
    }
  };

  useEffect(() => {
    handleFetch(assessment);
  }, [assessment]);

  return certificates;
};

export default useCertificates;
