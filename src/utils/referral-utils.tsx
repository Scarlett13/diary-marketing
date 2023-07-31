import { useEffect, useState } from 'react';

export function useReferralCodeChecker(referralCode: string) {
  const [valid, setValid] = useState<boolean>(false);

  useEffect(() => {
    fetch(
      `https://869mw200fg.execute-api.ap-southeast-3.amazonaws.com/dev/auth/checkUser?username=${referralCode}`
    )
      .then((res) => res.json())
      .then((data) => {
        setValid(data.valid);
      });
  }, [referralCode]);

  return valid;
}
