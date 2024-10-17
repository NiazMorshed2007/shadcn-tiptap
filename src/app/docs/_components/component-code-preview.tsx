import ComponentPreview from "./component-preview";

type ComponentCodePreview = {
	component: React.ReactElement;
	classNameComponentContainer?: string;
};

export default function ComponentCodePreview({
	component,
	classNameComponentContainer,
}: ComponentCodePreview) {
	return (
		<div className="not-prose relative z-0 flex items-center justify-between pb-4">
			<ComponentPreview
				component={component}
				className={classNameComponentContainer}
			/>
			{/* TODO: add code viewing */}
		</div>
	);
}
