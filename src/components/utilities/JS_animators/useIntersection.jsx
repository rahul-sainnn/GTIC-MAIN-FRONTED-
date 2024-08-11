import { useEffect, useState } from "react";

const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const current = element?.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );
    current && observer?.observe(current);

    return () => current && observer.unobserve(current);
  }, []);

  return isVisible;
};

export default useIntersection

// https://rasilbaidar.medium.com/trigger-event-when-element-enters-viewport-the-react-way-168509da2e23