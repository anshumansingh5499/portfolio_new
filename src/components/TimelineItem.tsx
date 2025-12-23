
export const TimelineItem = ({ title, period, desc }: { title: string; period: string; desc?: string }) => (
<div className="mt-4">
<div className="flex items-center justify-between">
<div className="font-medium">{title}</div>
<div className="text-xs text-slate-400">{period}</div>
</div>
{desc && <div className="text-sm text-slate-600 mt-1">{desc}</div>}
</div>
);