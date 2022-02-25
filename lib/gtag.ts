import React from "react";

interface eventProps {
  action: any;
  category: any;
  label: any;
  value: any;
}

export const GA_TRACKING_ID = "UA-213681992-1";

export const pageview = (url: string, title: string) => {
  (window as any).gtag("config", GA_TRACKING_ID, {
    page_location: url,
    page_title: title,
  });
};

export const event: React.FC<eventProps> = ({
  action,
  category,
  label,
  value,
}) => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });

  return null;
};
