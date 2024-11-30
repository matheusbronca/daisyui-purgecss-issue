<script lang="ts">
	import { onMount, onDestroy } from "svelte";

	type Option = {
		friendlyName: string;
		paramValue: string | null;
		isDefault: boolean;
	};

	export let queryParam: string;
	export let label: string;
	export let options: Option[];

	const defaultOption: Option = options.filter(
		(opt) => opt.isDefault === true,
	)[0];

	let selectedOption: Option;
	let selectedValue: string | null = defaultOption.paramValue;

	const getCurrentUrl = () => {
		const url = new URL(window.location.href);
		return url;
	};
	let hrefs = options.map((opt) => {
		const url = getCurrentUrl();
		url.searchParams.delete(queryParam);
		if (opt.paramValue) url.searchParams.set(queryParam, opt.paramValue);
		return `${url.pathname}${url.search}`;
	});

	const updateSelectedValue = () => {
		const currUrl = getCurrentUrl();
		selectedValue = currUrl.searchParams.get(queryParam);

		hrefs = options.map((opt) => {
			const url = getCurrentUrl();
			url.searchParams.delete(queryParam);
			if (opt.paramValue) url.searchParams.set(queryParam, opt.paramValue);
			return `${url.pathname}${url.search}`;
		});
	};

	$: selectedOption = options.filter(
		(opt) => opt.paramValue === selectedValue,
	)[0];

	onMount(() => {
		document.addEventListener("astro:page-load", updateSelectedValue);
	});

	onDestroy(() => {
		document.removeEventListener("astro:page-load", updateSelectedValue);
	});
</script>

<div class="flex gap-4">
	<div class="flex flex-col gap-1 items-center mb-4">
		<span class="inline-block text-slate-500 text-xs text-nowrap">{label}</span>
		<div class="dropdown w-full">
			<div
				tabindex={0}
				role="button"
				class="btn m-0 !px-4 !box-border border border-slate-100 bg-white hover:bg-slate-50 text-slate-500 w-full !text-xs"
			>
				<span>
					{selectedOption?.friendlyName ?? defaultOption.friendlyName}
				</span>
				<slot name="icon" />
			</div>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex={0}
				class="dropdown-content menu border border-slate-100 bg-base-100 rounded-box z-[1] w-52 p-2 mt-2 shadow-lg shadow-slate-700/10"
			>
				{#each options as option, index}
					<li>
						<a
							href={hrefs[index]}
							class="!no-underline hover:!bg-slate-100 active:!bg-slate-200 active:!text-primary"
						>
							{option.friendlyName}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
