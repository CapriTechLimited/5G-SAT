// common network Ports
// used by the pcapImport.js

const commonPorts = {
  7: 'Echo',
  19: 'Chargen',
  20: 'FTP Data',
  21: 'FTP Control',
  22: 'SSH (encrypted)',
  23: 'TELNET',
  25: 'SMTP',
  42: 'WINS Replication',
  43: 'Whois',
  49: 'TACAS',
  53: 'DNS',
  67: 'DHCP/BOOTP',
  68: 'DHCP/BOOTP',
  69: 'TFTP',
  70: 'Gopher',
  79: 'Finger',
  80: 'HTTP',
  81: 'TOR',
  88: 'Kerberos',
  102: 'MS Exchange',
  110: 'POP3',
  113: 'Ident',
  115: 'SFTP',
  119: 'NTTP',
  118: 'SQL Server',
  123: 'NTP',
  128: 'gss-xlicen',
  135: 'Microsoft RPC',
  137: 'NetBIOS',
  138: 'NetBIOS',
  139: 'NetBIOS',
  143: 'IMAP',
  150: 'sql-net',
  161: 'SNMP',
  162: 'SNMP',
  177: 'XDCMP',
  179: 'BGP',
  201: 'AppleTalk',
  264: 'BGMP',
  318: 'TSP',
  381: 'HP Openview',
  382: 'HP Openview',
  383: 'HP Openview',
  389: 'LDAP',
  411: 'Direct Connect (p2p)',
  412: 'Direct Connect (p2p)',
  443: 'HTTPS (encrypted)',
  445: 'Microsoft DS',
  464: 'Kerberos',
  465: 'SMTPS (encrypted)',
  497: 'Retrospect',
  512: 'rexec',
  513: 'rlogin',
  514: 'syslog',
  515: 'LPD/LPR',
  520: 'RIP',
  521: 'RPIng (IPv6)',
  540: 'UUCP',
  546: 'DHCP Client',
  547: 'DHCP Server',
  560: 'rmonitor',
  563: 'NNTP over SSL (encrypted)',
  587: 'SMTP',
  591: 'FileMaker',
  593: 'Microsoft DCoM',
  631: 'Internet Printing',
  636: 'LDAP over SSL (encrypted)',
  639: 'MSDP (PIM)',
  646: 'LDP (MPLS)',
  691: 'MS Exchange',
  1060: 'polestar',
  1101: 'pt2-discover or threat',
  1194: 'Open VPN',
  1492: 'stone-design-1 or trojan',
  1493: 'netmap_lm',
  1606: 'slm-api',
  1988: 'tr-rsrb-p2',
  1989: 'tr-rsrb-p3',
  2555: 'compaq-wcp or trojan',
  2559: 'lstp',
  2826: 'slc-systemlog',
  2828: 'slc-ctrlrloops',
  2829: 'silkp1',
  2830: 'silkp2',
  2831: 'silkp3',
  2832: 'silkp4',
  2833: 'glishd',
  3389: 'Remote Desktop Protocol',
  5357: 'wsdapi',
  8080: 'HTTP Proxy'
}

module.exports = commonPorts
