import { EyeOutlined } from "@ant-design/icons";
import { useShowButton } from "@refinedev/core";
import { Button } from "antd";
import React from "react";

import { ShowButtonProps } from "@refinedev/antd";

/**
 * `<ShowButton>` uses Ant Design's {@link https://ant.design/components/button/ `<Button>`} component.
 * It uses the {@link https://refine.dev/docs/api-reference/core/hooks/navigation/useNavigation#show `show`} method from {@link https://refine.dev/docs/api-reference/core/hooks/navigation/useNavigation `useNavigation`} under the hood.
 * It can be useful when redirecting the app to the show page with the record id route of resource.
 *
 * @see {@link https://refine.dev/docs/api-reference/antd/components/buttons/show-button} for more details.
 */
export const ShowButton: React.FC<ShowButtonProps> = ({
    resource: resourceNameFromProps,
    resourceNameOrRouteName: propResourceNameOrRouteName,
    recordItemId,
    hideText = false,
    accessControl,
    meta,
    children,
    onClick,
    ...rest
}) => {
    const { to, label, title, hidden, disabled, LinkComponent } = useShowButton({
        resource: resourceNameFromProps ?? propResourceNameOrRouteName,
        id: recordItemId,
        accessControl,
        meta
    });

    if (hidden) return null;

    // console.log("to: ", to);
    // console.log("label: ", label);
    // console.log("title: ", title);
    // console.log("hidden: ", hidden);
    // console.log("disabled: ", disabled);
    // console.log("link: ", LinkComponent);

    return (
        <Button
            className="refine-show-button"
            data-testid="refine-show-button"
            disabled={disabled}
            icon={<EyeOutlined />}
            onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
                console.log("on click: ", onClick);
                if (disabled) {
                    e.preventDefault();
                    return;
                }
                if (onClick) {
                    e.preventDefault();

                    onClick(e);
                }
            }}
            title={title}
            {...rest}
        >
            {!hideText ? children ?? label : null}
        </Button>
    );
};
