import clsx from 'clsx';

export type TabContentProps = {
  position: string;
  company: string;
  period: string;
  items: string[];
  hidden?: boolean;
};

const TabContent = (props: TabContentProps) => (
  <article
    hidden={props.hidden}
    className={clsx([
      {
        'motion-safe:animate-fade-in-bottom': !props.hidden,
        'sm:motion-safe:animate-fade-in-right': !props.hidden,
      },
    ])}>
    <h3 className="font-bold text-primary-foreground">
      {props.position}
      <span className="text-primary-foreground ml-2">@ {props.company}</span>
    </h3>
    <p className="small-copy">{props.period}</p>
    <ul className="bullet-list mt-6">
      {props.items.map((item, index) => (
        <li key={index} className="body-copy mt-4 first-of-type:mt-0 font-light">
          {item}
        </li>
      ))}
    </ul>
  </article>
);

export default TabContent;
