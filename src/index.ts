export default class ProtocolURLBuilder {
    readonly baseURL: string;
    constructor() {
        /**
         * The base URL for all URLs
         */
        this.baseURL = "discord://-/";
    };

    /**
     * Private - Builds all URLs
     * @param url URL to build
     * @param clickable If true, will build a link that will be clickable in Discord
     * @returns The given URL as a string, optionally with clickable markdown
     */
    private _buildURL(url: string, clickable: boolean): string {
        if (clickable) {
            return `<${url}>`;
        } else {
            return url;
        };
    };

    // Home Routes

    /**
     * Goes to the home page
     * 
     *• Link format: `discord://-/`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    home(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL, discordClickable);
    };

    /**
     * Goes to the friends page
     * 
     *• Link format: `discord://-/channels/@me`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    friends(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "channels/@me", discordClickable);
    };

    /**
     * @deprecated Discord has removed support for the store, thus this URL no longer works!
     * 
     * Goes to the store page
     * 
     *• Link format: `discord://-/store`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    store(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "store", discordClickable);
    };

    // General Routes

    /**
     * Goes to the apps page
     * 
     *• Link format: `discord://-/apps`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    apps(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "apps", discordClickable);
    };

    /**
     * Goes to the guild discovery page
     * 
     *• Link format: `discord://-/guild-discovery`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildDiscovery(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guild-discovery", discordClickable);
    };

    /**
     * Goes to the gift redemption page
     * 
     *• Link format: `discord://-/gifts/<giftCode>`
     * @param giftCode The gift code to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    gift(giftCode: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "gifts/" + giftCode, discordClickable);
    };

    /**
     * Goes to the gift redemption page, with a login prompt
     * 
     *• Link format: `discord://-/gifts/<giftCode>/login`
     * @param giftCode The gift code to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    giftWithLogin(giftCode: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "gifts/" + giftCode + "/login", discordClickable);
    };

    /**
     * Goes to new server creation page
     * 
     *• Link format: `discord://-/guilds/create`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    newServer(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/create", discordClickable);
    };

    /**
     * Goes to the use invite page
     * 
     *• Link format: `discord://-/invite/<inviteCode>`
     * @param inviteCode The invite code to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    serverInvite(inviteCode: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "invite/" + inviteCode, discordClickable);
    };

    /**
     * Goes to the use invite page, with a login prompt
     * 
     *• Link format: `discord://-/invite/<inviteCode>/login`
     * @param inviteCode The invite code to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    serverInviteWithLogin(inviteCode: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "invite/" + inviteCode + "/login", discordClickable);
    };

    // User Settings Routes

    /**
     * Goes to the user's account settings page
     * 
     *• Link format: `discord://-/settings/account`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsAccount(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/account", discordClickable);
    };

    /**
     * Goes to the user's profile customization settings page
     * 
     *• Link format: `discord://-/settings/profile-customization`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsProfileCustomization(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/profile-customization", discordClickable);
    };

    /**
     * Goes to the user's privacy and safety settings page
     * 
     *• Link format: `discord://-/settings/privacy-and-safety`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsPrivacyAndSafety(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/privacy-and-safety", discordClickable);
    };

    /**
     * Goes to the user's authorized apps settings page
     * 
     *• Link format: `discord://-/settings/authorized-apps`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsAuthorizedApps(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/authorized-apps", discordClickable);
    };

    /**
     * Goes to the user's connections settings page
     * 
     *• Link format: `discord://-/settings/connections`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsConnections(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/connections", discordClickable);
    };

    /**
     * Goes to the user's friend requests settings page
     * 
     *• Link format: `discord://-/settings/friend-requests`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsFriendRequests(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/friend-requests", discordClickable);
    };

    /**
     * Goes to the user's premium (nitro) settings page
     * 
     *• Link format: `discord://-/settings/premium`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsPremium(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/premium", discordClickable);
    };

    /**
     * Goes to the user's premium guild subscription (nitro server boosts) settings page
     * 
     *• Link format: `discord://-/settings/premium-guild-subscription`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsPremiumGuildSubscription(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/premium-guild-subscription", discordClickable);
    };

    /**
     * Goes to the user's subscriptions settings page
     * 
     *• Link format: `discord://-/settings/subscriptions`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsSubscriptions(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/subscriptions", discordClickable);
    };

    /**
     * Goes to the user's inventory (gift inventory) settings page
     * 
     *• Link format: `discord://-/settings/inventory`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsInventory(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/inventory", discordClickable);
    };

    /**
     * Goes to the user's billing settings page
     * 
     *• Link format: `discord://-/settings/billing`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsBilling(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/billing", discordClickable);
    };

    /**
     * Goes to the user's appearance settings page
     * 
     *• Link format: `discord://-/settings/appearance`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsAppearance(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/appearance", discordClickable);
    };

    /**
     * Goes to the user's accessibility settings page
     * 
     *• Link format: `discord://-/settings/accessibility`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsAccessiblility(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/accessibility", discordClickable);
    };

    /**
     * Goes to the user's voice (voice & video) settings page
     * 
     *• Link format: `discord://-/settings/voice`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsVoice(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/voice", discordClickable);
    };

    /**
     * Goes to the user's text (text & images) settings page
     * 
     *• Link format: `discord://-/settings/text`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsText(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/text", discordClickable);
    };

    /**
     * Goes to the user's notifications settings page
     * 
     *• Link format: `discord://-/settings/notifications`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsNotifications(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/notifications", discordClickable);
    };

    /**
     * Goes to the user's keybinds settings page
     * 
     *• Link format: `discord://-/settings/keybinds`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsKeybinds(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/keybinds", discordClickable);
    };

    /**
     * Goes to the user's locale (language) settings page
     * 
     *• Link format: `discord://-/settings/locale`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsLocale(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/locale", discordClickable);
    };

    /**
     * Goes to the user's windows (OS-specific; not always present) settings page
     * 
     *• Link format: `discord://-/settings/windows`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsWindows(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/windows", discordClickable);
    };

    /**
     * Goes to the user's linux (OS-specific; not always present) settings page
     * 
     *• Link format: `discord://-/settings/linux`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsLinux(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/linux", discordClickable);
    };

    /**
     * Goes to the user's streamer mode settings page
     * 
     *• Link format: `discord://-/settings/streamer-mode`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsStreamerMode(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/streamer-mode", discordClickable);
    };

    /**
     * Goes to the user's advanced settings page
     * 
     *• Link format: `discord://-/settings/advanced`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsAdvanced(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/advanced", discordClickable);
    };

    /**
     * Goes to the user's activity privacy settings page
     * 
     *• Link format: `discord://-/settings/activity-privacy`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsActivityPrivacy(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/activity-privacy", discordClickable);
    };

    /**
     * Goes to the user's registered games settings page
     * 
     *• Link format: `discord://-/settings/registered-games`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsRegisteredGames(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/registered-games", discordClickable);
    };

    /**
     * Goes to the user's overlay settings page
     * 
     *• Link format: `discord://-/settings/overlay`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsOverlay(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/overlay", discordClickable);
    };

    /**
     * Goes to the user's hypesquad online settings page
     * 
     *• Link format: `discord://-/settings/hypesquad-online`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsHypesquadOnline(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/hypesquad-online", discordClickable);
    };

    /**
     * Goes to the user's changelogs settings page
     * 
     *• Link format: `discord://-/settings/changelogs`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsChangelogs(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/changelogs", discordClickable);
    };

    /**
     * Goes to the user's experiments settings page
     * 
     *• Link format: `discord://-/settings/experiments`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsExperiments(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/experiments", discordClickable);
    };

    /**
     * Goes to the user's developer options settings page
     * 
     *• Link format: `discord://-/settings/developer-options`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsDeveloperOptions(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/developer-options", discordClickable);
    };

    /**
     * Goes to the user's hotspot options settings page
     * 
     *• Link format: `discord://-/settings/hotspot-options`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsHotspotOptions(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/hotspot-options", discordClickable);
    };

    /**
     * Goes to the user's dismissable content options settings page
     * 
     *• Link format: `discord://-/settings/dismissable-content-options`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userSettingsDismissableContentOptions(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "settings/dismissable-content-options", discordClickable);
    };

    // Guild Settings Routes

    /**
     * Goes to the specified guild's overview settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/overview`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsOverview(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/overview", discordClickable);
    };

    /**
     * Goes to the specified guild's roles settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/roles`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsRoles(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/roles", discordClickable);
    };

    /**
     * Goes to the specified guild's emoji settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/emoji`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsEmoji(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/emoji", discordClickable);
    };

    /**
     * Goes to the specified guild's stickers settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/stickers`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsStickers(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/stickers", discordClickable);
    };

    /**
     * Goes to the specified guild's widget settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/widget`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsWidget(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/widget", discordClickable);
    };

    /**
     * Goes to the specified guild's guild templates settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/guild-templates`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsGuildTemplates(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/guild-templates", discordClickable);
    };

    /**
     * Goes to the specified guild's vanity URL settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/vanity-url`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsVanityURL(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/vanity-url", discordClickable);
    };

    /**
     * Goes to the specified guild's integrations settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/integrations`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsIntegrations(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/integrations", discordClickable);
    };

    /**
     * Goes to the specified guild's app directory settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/app-directory`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsAppDirectory(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/app-directory", discordClickable);
    };

    /**
     * Goes to the specified guild's member verification settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/member-verification`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsMemberVerification(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/member-verification", discordClickable);
    };

    /**
     * Goes to the specified guild's moderation settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/moderation`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsModeration(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/moderation", discordClickable);
    };

    /**
     * Goes to the specified guild's audit log settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/audit-log`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsAuditLog(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/audit-log", discordClickable);
    };

    /**
     * Goes to the specified guild's bans settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/bans`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsBans(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/bans", discordClickable);
    };

    /**
     * Goes to the specified guild's community settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/communuity`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsCommunity(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/community", discordClickable);
    };

    /**
     * Goes to the specified guild's analytics settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/analytics`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsAnalytics(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/analytics", discordClickable);
    };

    /**
     * Goes to the specified guild's partner settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/partner`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsPartner(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/partner", discordClickable);
    };

    /**
     * Goes to the specified guild's discovery settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/discovery`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsDiscovery(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/discovery", discordClickable);
    };

    /**
     * Goes to the specified guild's community welcome settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/community-welcome`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsCommunityWelcome(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/community-welcome", discordClickable);
    };

    /**
     * Goes to the specified guild's role subscriptions settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/role-subscriptions`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsRoleSubscriptions(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/role-subscriptions", discordClickable);
    };

    /**
     * Goes to the specified guild's premium (nitro server boosts) settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/guild-premium`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsGuildPremium(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/guild-premium", discordClickable);
    };

    /**
     * Goes to the specified guild's members settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/members`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsMembers(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/members", discordClickable);
    };

    /**
     * Goes to the specified guild's instant invites settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/instant-invites`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsInstantInvites(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/instant-invites", discordClickable);
    };

    /**
     * Goes to the specified guild's delete settings page
     * 
     *• Link format: `discord://-/guilds/<guildId>/settings/delete`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildSettingsDelete(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guilds/" + guildId + "/settings/delete", discordClickable);
    };

    // User Routes

    /**
     * Goes to the specified user's profile popout
     * 
     *• Link format: `discord://-/users/<userId>`
     * @param userId The user ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    userProfile(userId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "users/" + userId, discordClickable);
    };

    // Guild Routes

    /**
     * Goes to the specified guild
     * 
     *• Link format: `discord://-/channels/<guildId>`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guild(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "channels/" + guildId, discordClickable);
    };

    /**
     * Goes to the specified channel, in the specified guild
     * 
     *• Link format: `discord://-/channels/<guildId>/<channelId>`
     * @param guildId The guild ID to use
     * @param channelId The channel ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildChannel(guildId: string, channelId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "channels/" + guildId + "/" + channelId, discordClickable);
    };

    /**
     * Goes to the specified guild's home channel
     * 
     *• Link format: `discord://-/channel/<guildId>/@home`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildHomeChannel(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "channels/" + guildId + "/@home", discordClickable);
    };

    /**
     * Goes to the specified event, in the specified guild
     * 
     *• Link format: `discord://-/channels/<guildId>/<eventId>`
     * @param guildId The guild ID to use
     * @param eventId The event ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildEvent(guildId: string, eventId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "channels/" + guildId + "/" + eventId, discordClickable);
    };

    /**
     * Goes to the specified message, in the specified channel, in the specified guild
     * 
     *• Link format: `discord://-/channels/<guildId>/<channelId>/<messageId>`
     * @param guildId The guild ID to use
     * @param channelId The channel ID to use
     * @param messageId The message ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildMessage(guildId: string, channelId: string, messageId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "channels/" + guildId + "/" + channelId + "/" + messageId, discordClickable);
    };

    /**
     * Goes to the specified guild's membership screening page
     * 
     *• Link format: `discord://-/member-verification/<guildId>`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildMembershipScreening(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "member-verification/" + guildId, discordClickable);
    };

    /**
     * Goes to the specified guild's role subscriptions page
     * 
     *• Link format: `discord://-/guild-role-subscriptions/<guildId>`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildRoleSubscriptions(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "guild-role-subscriptions/" + guildId, discordClickable);
    };

    /**
     * Goes to the specified guild hub's membership screening page
     * 
     *• Link format: `discord://-/membership-verification-for-hub/<guildId>`
     * @param guildId The guild ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    guildHubMembershipScreening(guildId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "member-verification-for-hub/" + guildId, discordClickable);
    };

    // DM Routes

    /**
     * Goes to the specified DM channel
     * 
     *• Link format: `discord://-/channels/@me/<channelId>`
     * @param channelId The channel ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    dmChannel(channelId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "channels/@me/" + channelId, discordClickable);
    };

    /**
     * Goes to the user's message requests page
     * 
     *• Link format: `discord://-/message-requests`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    dmRequests(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "message-requests", discordClickable);
    };

    /**
     * Goes to the specified message, in the specified DM channel
     * 
     *• Link format: `discord://-/channels/@me/<channelId>/<messageId>`
     * @param channelId The channel ID to use
     * @param messageId The message ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    dmMessage(channelId: string, messageId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "channels/@me/" + channelId + "/" + messageId, discordClickable);
    };

    /**
     * Goes to the user's favorites page
     * 
     *• Link format: `discord://-/channels/@favorites`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    dmFavorites(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "channels/@favorites", discordClickable);
    };

    /**
     * Goes to the specified channel in the user's favorites page
     * 
     *• Link format: `discord://-/channels/@favorites/<channelId>`
     * @param channelId The channel ID to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    dmFavoritesChannel(channelId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "channels/@favorites/" + channelId, discordClickable);
    };

    // Library Routes

    /**
     * Goes to the user's library
     * 
     *• Link format: `discord://-/library`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    library(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "library", discordClickable);
    };

    /**
     * Goes to the user's library inventory
     * 
     *• Link format: `discord://-/library/inventory`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    libraryInventory(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "library/inventory", discordClickable);
    };

    /**
     * Performs the specified action on an SKU in the user's library
     * 
     *• Link format: `discord://-/library/<skuId>/[actionType]`
     * @param skuId The SKU id to use
     * @param actionType If provided, will perform the specified action on the specified SKU
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    libraryItemActions(skuId: string, actionType?: keyof typeof LibraryActionName, discordClickable: boolean = false): string {
        if (actionType) {
            return this._buildURL(this.baseURL + "library/" + skuId + "/" + LibraryActionName[actionType], discordClickable);
        } else {
            return this._buildURL(this.baseURL + "library/" + skuId, discordClickable);
        };
    };

    /**
     * Goes to the user's library settings
     * 
     *• Link format: `discord://-/library/settings`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    librarySettings(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "library/settings", discordClickable);
    };

    // Store Routes

    /**
     * @deprecated Discord has removed support for the store, thus this URL no longer works!
     * 
     * Goes to the specified SKU's store page
     * 
     *• Link format: `discord://-/store/skus/<skuId>`
     * @param skuId The SKU id to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    storePageSKU(skuId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "store/skus/" + skuId, discordClickable);
    };

    /**
     * @deprecated Discord has removed support for the store, thus this URL no longer works!
     * 
     * Goes to the specified application's store page
     * 
     *• Link format: `discord://-/store/applications/<applicationId>`
     * @param applicationId The application id to use
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    storePageApplication(applicationId: string, discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "store/applications/" + applicationId, discordClickable);
    };

    // Account Routes

    /**
     * Goes to the account login page, and optionally will redirect to a specific URL
     * 
     *• Link format: `discord://-/login`
     * 
     *• Link format with redirection: `discord://-/login?redirect_to=<redirectTo>`
     * @param redirectTo If supplied, when the user logs in, they will be redirected to the specified URL
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    accountLogin(redirectTo?: string, discordClickable: boolean = false): string {
        if (redirectTo) {
            return this._buildURL(this.baseURL + "login?redirect_to=" + redirectTo, discordClickable);
        } else {
            return this._buildURL(this.baseURL + "login", discordClickable);
        };
    };

    /**
     * Goes to the account registration page, and optionally will redirect to a specific URL
     * 
     *• Link format: `discord://-/register`
     * 
     *• Link format with redirection: `discord://-/register?redirect_to=<redirectTo>`
     * @param redirectTo If supplied, when the user registers, they will be redirected to the specified URL
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    accountRegister(redirectTo?: string, discordClickable: boolean = false): string {
        if (redirectTo) {
            return this._buildURL(this.baseURL + "register?redirect_to=" + redirectTo, discordClickable);
        } else {
            return this._buildURL(this.baseURL + "register", discordClickable);
        };
    };

    /**
     * Goes to the user's reset account page
     * 
     *• Link format: `discord://-/reset`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    accountReset(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "reset", discordClickable);
    };

    /**
     * Goes to the user's restore account page
     * 
     *• Link format: `discord://-/restore`
     * @param discordClickable If true, will build a link that will be clickable in Discord
     * @returns The URL as a string, optionally with clickable markdown
     */
    accountRestore(discordClickable: boolean = false): string {
        return this._buildURL(this.baseURL + "restore", discordClickable);
    };
};

export enum LibraryActionName {
    Launch = "launch"
};