---
sidebar_label: 'Band'
sidebar_position: 1
slug: band-playbooks
title: Band Protocol Ansible playbooks!
description: The collection of band ansible playbooks for easier nodes management
---

# Ansible for Band Protocol

Deploy a fullnode with oracle for bandprotocol validator using ansible playbook

### Parameters to configure
hosts.ini
* default_ssh_port='22'
* p2p_port='26656'
* custom_ssh_port='57315'
* default_user='root'
* go_bin='/usr/local/bin'
* band_version='v2.5.2'
* enable_prometheus='true'
* prometheus_ip='8.8.8.8'
* prometheus_port='26660'

### How to run ansible playbook
Clone repo with playbook:  
`git clone https://github.com/Stakecraft/BandProtocol-tools/ && cd ansible`

If you want to configure custom ssh port or enable firewall for cosmos based node, you will want to run this playbook first:  
`ansible-playbook -i hosts.ini 01-os-preparation.yml -e "ansible_ssh_timeout=60"`

After the system is ready run following playbook to install bandd and yoda binaries:  
`ansible-playbook -i hosts.ini 02-band-installation.yml -l 'validator' -e "ansible_ssh_timeout=60"`

Enjoy!