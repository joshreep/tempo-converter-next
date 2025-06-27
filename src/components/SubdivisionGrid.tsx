import useTapTempoSubDivision from '@/hooks/useTapTempoSubDivision';
import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

type SubdivisionGridProps = PropsWithChildren<{
  subdivisions: ReturnType<typeof useTapTempoSubDivision>['subdivisions'];
}>;

const SubdivisionGrid: FC<SubdivisionGridProps> = ({ subdivisions }) => (
  <div className="w-full">
    {subdivisions.map(({ title, value }) => {
      const colClassName = classNames('w-1/2 px-0.5 py-1.5 text-nowrap', {
        'font-bold': title === 'Quarter',
      });

      return (
        <div key={title} className="w-full flex flex-row flex-nowrap gap-4">
          <div className={classNames(colClassName, 'text-right')}>{title}</div>
          <div className={colClassName}>{value} ms</div>
        </div>
      );
    })}
  </div>
);

export default SubdivisionGrid;
