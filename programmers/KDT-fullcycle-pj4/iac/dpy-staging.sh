#!/bin/sh

VAR_FILE="staging.tfvars"
: ${KUBECONFIG_PATH:="~/.kube/docker-desktop/kubeconfig"}
: ${IMG_BE:="notes-be:latest"}
: ${IMG_FE:="notes-fe:latest"}

if [ "$1" = "on" ] ; then
    cat staging.conf setup.conf > notes.tf
    terraform init -reconfigure -no-color
    terraform apply --auto-approve -no-color \
        -var-file="${VAR_FILE}" \
        -var "kubernetes_config_path=${KUBECONFIG_PATH}" \
        -var "container_image_be=${IMG_BE}" \
        -var "container_image_fe=${IMG_FE}"
elif [ "$1" = "off" ] ; then
    cat staging.conf setup.conf > notes.tf
    terraform init -reconfigure -no-color
    terraform destroy --auto-approve -no-color \
        -var-file="${VAR_FILE}" \
        -var "kubernetes_config_path=${KUBECONFIG_PATH}"
else
    echo "Usage: $0 <on/off>"
fi
